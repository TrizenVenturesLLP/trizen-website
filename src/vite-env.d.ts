/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_BASE_URL?: string;
  readonly VITE_SUPABASE_URL?: string;
  readonly VITE_SUPABASE_ANON_KEY?: string;
  /** Storage bucket for certificate PNG/PDF; default "certificates" */
  readonly VITE_SUPABASE_CERTIFICATES_BUCKET?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
