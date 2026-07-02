import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: '/', // <--- This lets GitHub Pages find your assets
  server: {
    host: true,
    port: 5173,
    allowedHosts: true
  }
})
