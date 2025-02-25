import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig(
  ({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '')
    return {
      plugins: [
        react()
      ],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      },
      server: {
        port: 5173,
        allowedHosts: [
          env.VITE_BUYER_IFRAME_HOSTNAME
        ],
        host: '0.0.0.0'
      }
    }
  }
)
