import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'static',
    assetsDir: '',
    emptyOutDir: true,
    rollupOptions: {
      input: 'src/main.js',
      output: {
        entryFileNames: 'main.js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name][extname]'
      }
    }
  }
});
