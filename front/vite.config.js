import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,        // или '0.0.0.0' → доступен из локалки
    port: 5173,        // порт, который хочешь открыть
    strictPort: true,  // если занят — не будет автопереключения
    cors: true,        // если нужен доступ из других устройств
  },
})
