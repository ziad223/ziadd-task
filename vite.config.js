import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: 'ghasiq/frontend',

  plugins: [
    react(),
  ],
  optimizeDeps: {
    include: ['react-toastify']
  }
});