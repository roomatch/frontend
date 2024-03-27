import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@uiComponents': '/src/components/ui',
      '@assets': '/src/assets',
      '@components': '/src/components',
    },
  },
  plugins: [react()],
})
