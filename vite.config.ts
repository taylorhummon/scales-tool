/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
  server: {
    port: 1234,
    strictPort: true
  },
  build: {
    rollupOptions: {
      input: {
        main: "minimal.html"
      },
    },
  },
  test: {
    dir: "tests",
    environment: "jsdom",
    setupFiles: "./tests/setupTests.ts"
  }
});
