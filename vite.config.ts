import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Dev: nekešinti modules.json, kad po serverio perkrovimo matytum naują turinį
    {
      name: 'no-cache-modules-json',
      configureServer(server) {
        const noCache = (_req: any, res: any, next: () => void) => {
          if (_req.url?.includes('modules.json')) {
            res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate')
            res.setHeader('Pragma', 'no-cache')
          }
          next()
        }
        server.middlewares.stack.unshift({ route: '', handle: noCache })
      },
    },
  ],
  base: process.env.NODE_ENV === 'production' ? '/anatomija/' : '/',
  server: {
    port: 3000,
    host: '0.0.0.0',
    open: true,
    headers: {
      // Dev only: Vite HMR uses eval(); Cursor/Chrome strict CSP blocks it.
      'Content-Security-Policy': "script-src 'self' 'unsafe-eval' 'unsafe-inline'; object-src 'self'",
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    cssCodeSplit: true, // Enable CSS code splitting
    minify: 'esbuild', // Use esbuild (faster, already included)
    cssMinify: true, // Minify CSS
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react']
        },
        // Optimize chunk size
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      }
    }
  }
})
