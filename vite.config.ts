/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src/",
    },
  },
  server: {
    port: 1234,
    strictPort: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      }
    }
  },
  test: {
    dir: "tests",
    environment: "jsdom",
    setupFiles: "./tests/setupTests.ts",
  }
});
