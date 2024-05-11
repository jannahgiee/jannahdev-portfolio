import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-router', 'react-router-dom']
    }
  },
  assetsInclude: ['**/*.glb']
});
