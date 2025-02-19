import { BrowserRouter, Route, Routes  } from 'react-router'
import { PrivyProvider } from '@privy-io/react-auth'
import Home from '@/views/Home'
import Seller from '@/views/Seller'
import Buyer from '@/views/Buyer'

function App () {
  return (
    <BrowserRouter>
      {/* Sellers */}
      <PrivyProvider
        appId={import.meta.env.VITE_PRIVY_S_APP_ID}
        clientId={import.meta.env.VITE_PRIVY_S_CLIENT_ID}
        config={{
          loginMethods: ['email']
        }}>
        <Routes>
          <Route path="/seller" element={<Seller/>} />
        </Routes>
      </PrivyProvider>
      {/* Buyers */}
      <PrivyProvider
        appId={import.meta.env.VITE_PRIVY_B_APP_ID}
        clientId={import.meta.env.VITE_PRIVY_B_CLIENT_ID}
        config={{
          loginMethods: ['email']
        }}>
        <Routes>
          <Route path="/buyer" element={<Buyer />} />
        </Routes>
      </PrivyProvider>
      {/* Others (no association with Privy users) */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
