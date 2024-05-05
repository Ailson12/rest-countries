import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    testTimeout: 8000,
    setupFiles: './src/config/setupTests'
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})