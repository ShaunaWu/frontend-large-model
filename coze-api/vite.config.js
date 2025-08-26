import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 8000,
    open: true
  },
  envDir: '.',
  envPrefix: 'VITE_'
})