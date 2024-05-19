import { coverageConfigDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    testTimeout: 8000,
    setupFiles: "src/config/setupTests",
    coverage: {
      exclude: [...coverageConfigDefaults.exclude, "src/router/index.tsx"],
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
