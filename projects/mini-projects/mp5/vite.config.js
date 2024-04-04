import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteCommonjs()],
  test: {
    // Test options go here
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',  // if you have a setup file
  },
});
