import axios from 'axios'

/**
 * Axios client for the future ContextFlow backend.
 *
 * Phase 1 is frontend-only: nothing imports this client yet and no network
 * requests are made. All data shown in the UI comes from `src/data/dashboard.ts`.
 */
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? '/api',
  timeout: 10_000,
  headers: { 'Content-Type': 'application/json' },
})
