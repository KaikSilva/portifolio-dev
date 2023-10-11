import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    { "name": "typescript-plugin-css-modules" }
  ],
  css: {
    preprocessorOptions: {
      scss: {
        modules: true,
      },
    },
  }
})
