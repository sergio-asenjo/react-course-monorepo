/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  server: {
    port: 4200,
    host: 'localhost',
  },
  css: {
    devSourcemap: true,
  },
  build: {
    sourcemap: true,
  },
  plugins: [
    react(),
    svgr(),
    tsconfigPaths({
      root: '../../',
      projects: ['tsconfig.base.json'],
    }),
  ],

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
