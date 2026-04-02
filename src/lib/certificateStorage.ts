import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { QRCodeGenerator } from "./qrCodeGenerator";

const DB_NAME = "trizen-certificate-registry";
const DB_VERSION = 1;
const STORE = "certificates";

export interface StoredCertificateAssets {
  id: string;
  pngDataUrl: string | null;
  pdfBase64: string | null;
  savedAt: number;
}

export interface ResolvedCertificateSources {
  certificateExists: boolean;
  /** URL for <img src> or window.open */
  certificatePngUrl: string | null;
  certificatePdfUrl: string | null;
  /** Revoke when swapping certificate display */
  objectUrls: string[];
}

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onerror = () => reject(req.error);
    req.onsuccess = () => resolve(req.result);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE)) {
        db.createObjectStore(STORE, { keyPath: "id" });
      }
    };
  });
}

/** 6-char IDs for registry / cloud; legacy static filenames otherwise. */
export function resolveCertificateBasename(paramId: string | undefined): string | null {
  if (!paramId) return null;
  const trimmed = paramId.trim();
  const upper = trimmed.toUpperCase().replace(/[^A-Z0-9]/g, "");
  if (upper.length === 6 && QRCodeGenerator.validateCertificateId(upper)) {
    return upper;
  }
  const safe = trimmed.replace(/[^a-zA-Z0-9_.-]/g, "");
  return safe.length > 0 ? safe : null;
}

export function isStandardCertificateId(id: string): boolean {
  const cleaned = id.toUpperCase().replace(/[^A-Z0-9]/g, "");
  return cleaned.length === 6 && QRCodeGenerator.validateCertificateId(cleaned);
}

export async function saveCertificateToIndexedDB(
  id: string,
  pngDataUrl: string,
  pdfBlob: Blob
): Promise<void> {
  const pdfBase64 = await blobToBase64(pdfBlob);
  const db = await openDb();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    const store = tx.objectStore(STORE);
    const row: StoredCertificateAssets = {
      id,
      pngDataUrl,
      pdfBase64,
      savedAt: Date.now(),
    };
    const req = store.put(row);
    req.onerror = () => reject(req.error);
    tx.oncomplete = () => {
      db.close();
      resolve();
    };
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error);
  });
}

export async function loadCertificateFromIndexedDB(
  id: string
): Promise<StoredCertificateAssets | null> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readonly");
    const store = tx.objectStore(STORE);
    const req = store.get(id);
    req.onerror = () => reject(req.error);
    tx.oncomplete = () => db.close();
    req.onsuccess = () => resolve((req.result as StoredCertificateAssets) ?? null);
    tx.onerror = () => reject(tx.error);
  });
}

function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onloadend = () => {
      const s = r.result as string;
      const i = s.indexOf(",");
      resolve(i >= 0 ? s.slice(i + 1) : s);
    };
    r.onerror = () => reject(r.error);
    r.readAsDataURL(blob);
  });
}

function base64ToBlob(base64: string, mime: string): Blob {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return new Blob([bytes], { type: mime });
}

export function storedRowToDisplayUrls(
  row: StoredCertificateAssets
): Pick<ResolvedCertificateSources, "certificatePngUrl" | "certificatePdfUrl" | "objectUrls"> {
  const objectUrls: string[] = [];
  let certificatePngUrl: string | null = null;
  let certificatePdfUrl: string | null = null;

  if (row.pngDataUrl) {
    certificatePngUrl = row.pngDataUrl;
  }
  if (row.pdfBase64) {
    const blob = base64ToBlob(row.pdfBase64, "application/pdf");
    const url = URL.createObjectURL(blob);
    objectUrls.push(url);
    certificatePdfUrl = url;
  }

  return { certificatePngUrl, certificatePdfUrl, objectUrls };
}

export function isSupabaseConfigured(): boolean {
  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY;
  return Boolean(url && key);
}

function getSupabase(): SupabaseClient | null {
  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

const BUCKET = import.meta.env.VITE_SUPABASE_CERTIFICATES_BUCKET || "certificates";

export async function uploadCertificateToSupabase(
  id: string,
  pngBlob: Blob,
  pdfBlob: Blob
): Promise<void> {
  const supabase = getSupabase();
  if (!supabase) return;

  const pngPath = `${id}.png`;
  const pdfPath = `${id}.pdf`;

  const { error: pngErr } = await supabase.storage
    .from(BUCKET)
    .upload(pngPath, pngBlob, { upsert: true, contentType: "image/png" });
  if (pngErr) throw new Error(`PNG upload failed: ${pngErr.message}`);

  const { error: pdfErr } = await supabase.storage
    .from(BUCKET)
    .upload(pdfPath, pdfBlob, { upsert: true, contentType: "application/pdf" });
  if (pdfErr) throw new Error(`PDF upload failed: ${pdfErr.message}`);
}

export function getSupabasePublicCertificateUrls(id: string): {
  png: string;
  pdf: string;
} | null {
  const supabase = getSupabase();
  if (!supabase) return null;
  const png = supabase.storage.from(BUCKET).getPublicUrl(`${id}.png`).data.publicUrl;
  const pdf = supabase.storage.from(BUCKET).getPublicUrl(`${id}.pdf`).data.publicUrl;
  return { png, pdf };
}

/** True if resource exists (HEAD, or GET when HEAD is inconclusive). */
async function resourceExists(url: string): Promise<boolean> {
  try {
    const head = await fetch(url, { method: "HEAD", cache: "no-cache" });
    if (head.ok) return true;
    if (head.status === 404) return false;
    const get = await fetch(url, { method: "GET", cache: "no-cache" });
    if (get.ok) {
      await get.body?.cancel();
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

/**
 * Resolve certificate for display: Supabase (if configured) → static files → IndexedDB.
 */
export async function resolveCertificate(
  routeParamId: string | undefined
): Promise<ResolvedCertificateSources & { basename: string | null; error: string | null }> {
  const objectUrls: string[] = [];
  const basename = resolveCertificateBasename(routeParamId);

  if (!basename) {
    return {
      basename: null,
      error: "Certificate ID is missing or invalid",
      certificateExists: false,
      certificatePngUrl: null,
      certificatePdfUrl: null,
      objectUrls,
    };
  }

  if (isSupabaseConfigured() && isStandardCertificateId(basename)) {
    const urls = getSupabasePublicCertificateUrls(basename);
    if (urls) {
      const [pngOk, pdfOk] = await Promise.all([
        resourceExists(urls.png),
        resourceExists(urls.pdf),
      ]);
      if (pngOk || pdfOk) {
        return {
          basename,
          error: null,
          certificateExists: true,
          certificatePngUrl: pngOk ? urls.png : null,
          certificatePdfUrl: pdfOk ? urls.pdf : null,
          objectUrls,
        };
      }
    }
  }

  const pngUrl = `/certificates/${basename}.png`;
  const pdfUrl = `/certificates/${basename}.pdf`;
  const [pngOk, pdfOk] = await Promise.all([
    resourceExists(pngUrl),
    resourceExists(pdfUrl),
  ]);

  if (pngOk || pdfOk) {
    return {
      basename,
      error: null,
      certificateExists: true,
      certificatePngUrl: pngOk ? pngUrl : null,
      certificatePdfUrl: pdfOk ? pdfUrl : null,
      objectUrls,
    };
  }

  if (isStandardCertificateId(basename)) {
    const row = await loadCertificateFromIndexedDB(basename);
    if (row && (row.pngDataUrl || row.pdfBase64)) {
      const fromStore = storedRowToDisplayUrls(row);
      objectUrls.push(...fromStore.objectUrls);
      return {
        basename,
        error: null,
        certificateExists: true,
        certificatePngUrl: fromStore.certificatePngUrl,
        certificatePdfUrl: fromStore.certificatePdfUrl,
        objectUrls,
      };
    }
  }

  return {
    basename,
    error: `Certificate not found for ID "${basename}". Generate again (saves locally) or deploy files to /certificates/ or configure Supabase.`,
    certificateExists: false,
    certificatePngUrl: null,
    certificatePdfUrl: null,
    objectUrls,
  };
}

export function dataUrlToBlob(dataUrl: string): Blob {
  const comma = dataUrl.indexOf(",");
  const header = comma >= 0 ? dataUrl.slice(0, comma) : "";
  const base64 = comma >= 0 ? dataUrl.slice(comma + 1) : dataUrl;
  const mimeMatch = header.match(/:(.*?);/);
  const mime = mimeMatch?.[1] || "image/png";
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return new Blob([bytes], { type: mime });
}
