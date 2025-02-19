import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrimeReactProvider } from 'primereact/api'
import '@/index.css'
import '@/assets/main.css'
import 'primeicons/primeicons.css'
import App from '@/App'

const init = async () => {
  const Root = () => {
    return (
      <StrictMode>
        <PrimeReactProvider>
          <App />
        </PrimeReactProvider>
      </StrictMode>
    )
  }
  // -- Initialize and mount the App
  createRoot(
  document.getElementById('root')!
  ).render(<Root/>)
}

init()
