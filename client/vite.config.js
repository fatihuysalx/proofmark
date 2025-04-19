import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // React plugin'i ekle
  resolve: {
    extensions: ['.js', '.jsx'], // JSX uzantısını tanıt
  },
});
