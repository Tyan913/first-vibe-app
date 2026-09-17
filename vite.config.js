import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages 部署在子路径下：https://tyan913.github.io/first-vibe-app/
  base: '/first-vibe-app/',
  plugins: [react()],
})
