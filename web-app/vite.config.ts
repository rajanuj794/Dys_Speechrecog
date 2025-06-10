import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Externalize @xenova/transformers for both main app & worker context
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@xenova/transformers'],
    },
    target: 'esnext', // ensures ESModules are preserved
  },
  worker: {
    format: 'es',
    rollupOptions: {
      external: ['@xenova/transformers'],
    },
  },
})
