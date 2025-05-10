// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

export default defineConfig({
  base: '/proofmark/', // 🔥 BURASI ÇOK ÖNEMLİ
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
  resolve: {
    alias: {
      buffer: 'buffer',
    },
  }
});