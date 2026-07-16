/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_BASE_URL?: string;
  readonly VITE_SUPABASE_URL?: string;
  readonly VITE_SUPABASE_ANON_KEY?: string;
  /** Storage bucket for certificate PNG/PDF; default "certificates" */
  readonly VITE_SUPABASE_CERTIFICATES_BUCKET?: string;
  /** Expose /certificate-manager admin UI when "true" */
  readonly VITE_ENABLE_CERT_ADMIN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
