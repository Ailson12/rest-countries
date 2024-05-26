import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

/// <reference path="vitest" />

// https://vitejs.dev/config/
export default defineConfig({
  server: { 
    host: true 
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
