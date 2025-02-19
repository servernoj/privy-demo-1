import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig(
  () => {
    return {
      plugins: [
        react()
      ],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      },
      build: {
        chunkSizeWarningLimit: 1024,
        rollupOptions: {
          output: {
            manualChunks (id) {
              const component = id.match(/rampoc[/]apps[/]ui[/]src[/](views|components)[/](?<name>.+)[.]tsx/)?.groups?.name
              if (component) {
                return `comp-${component}`
              }
            }
          }
        }
      }
    }
  }
)
