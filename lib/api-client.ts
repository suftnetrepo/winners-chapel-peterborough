import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.JERUR_NEXT_BASE_URL,
  timeout: 15_000,
  // Axios buffers responses in memory. Bound both directions so an upstream
  // fault or unexpectedly large request cannot exhaust a small Render instance.
  maxContentLength: 5 * 1024 * 1024,
  maxBodyLength: 5 * 1024 * 1024,
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use((config) => {
  config.headers.set('nj-api-key', process.env.JERUR_NEXT_API_KEY ?? '');
  return config;
});
