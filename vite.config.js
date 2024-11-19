import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    mimeTypes: {
      'text/javascript': ['js', 'jsx'],
      'application/javascript': ['js', 'jsx']
    }
  }
})
