import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  resolve: {
    // https://cn.vite.dev/config/shared-options.html#resolve-preservesymlinks
    preserveSymlinks: false,
  },
})
