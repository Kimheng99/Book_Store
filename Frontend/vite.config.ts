import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // Proxy: mọi request /api/... được chuyển sang backend cổng 3000
    // → không cần cấu hình CORS ở backend
    // Proxy cả /api (REST) lẫn /uploads (ảnh bìa) sang backend cổng 3000
    proxy: {
      '/api': 'http://localhost:3000',
      '/uploads': 'http://localhost:3000',
    },
  },
});
