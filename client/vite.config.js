// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

export default defineConfig({
  base: '/', // 🔥 BURASI ÇOK ÖNEMLİ
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        })
      ]
    }
  },

  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
  },

  resolve: {
    alias: {
      buffer: 'buffer',
    },
  }
});