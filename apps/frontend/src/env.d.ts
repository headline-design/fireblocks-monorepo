/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AUTOMATE_INITIALIZATION?: string;
  readonly VITE_NCW_SDK_ENV?: string;
  readonly VITE_AUTH0_DOMAIN: string;
  readonly VITE_AUTH0_CLIENT_ID: string;
  readonly VITE_AUTH0_AUDIENCE: string;
  readonly VITE_BACKEND_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
