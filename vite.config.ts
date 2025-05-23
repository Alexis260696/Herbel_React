import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Herbel_React/', 
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Esto hace que Vite escuche en todas las interfaces de red
    port: 3000,   
  },
  build: {
    sourcemap: true,
  }
})
