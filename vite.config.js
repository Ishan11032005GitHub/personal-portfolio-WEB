// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace the repo name if different
export default defineConfig({
  base: '/personal-portfolio-WEB/',
  plugins: [react()],
})
