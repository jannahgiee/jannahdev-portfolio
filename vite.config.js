import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/jannahdev-portfolio/',
  plugins: [react()],
  server: {
    fs: {
      // Allow serving files outside of `public` directory
      strict: false
    },
    // Fallback to index.html for all routes
    proxy: {
      '/': {
        target: 'https://jannahgiee.github.io/jannahdev-portfolio/', // Replace with your server address
        rewrite: (path) => path === '/' ? '/index.html' : '/index.html'
      }
    }
  },
  assetsInclude: ['**/*.glb'],
})
