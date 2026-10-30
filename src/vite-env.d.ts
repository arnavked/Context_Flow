/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Base URL of the ContextFlow backend API (not called yet in Phase 1). */
  readonly VITE_API_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
