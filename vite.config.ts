/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig({
  define: {
    global: {},
    process: {
      env: {}
    },
  },
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {      
      'node-fetch': 'isomorphic-fetch'
    }
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: '.vitest/setup',
    include: ['**/test.{ts,tsx}']
  },
  esbuild: {
    platform: 'node'
  }
})
