import { BrowserRouter, Route, Routes  } from 'react-router'
import Home from '@/views/Home'
import Layout from '@/components/layout'
import IFramedProvider from '@/views/IFramedProvider'
import Actor from '@/views/Actor'

function App () {
  return <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/seller" element={
          <IFramedProvider
            provider={{
              appId: import.meta.env.VITE_PRIVY_S_APP_ID,
              clientId: import.meta.env.VITE_PRIVY_S_CLIENT_ID,
              config: {
                loginMethods: ['email']
              }
            }}
            url={`${window.location.href}`}
          >
            <Actor name='Seller' disableSignup/>
          </IFramedProvider>
        } />
        <Route path="/buyer" element={
          <IFramedProvider
            provider={{
              appId: import.meta.env.VITE_PRIVY_B_APP_ID,
              clientId: import.meta.env.VITE_PRIVY_B_CLIENT_ID,
              config: {
                loginMethods: ['email']
              }
            }}
            url={`https://${import.meta.env.VITE_BUYER_IFRAME_HOSTNAME}/buyer`}
          >
            <Actor name='Buyer'/>
          </IFramedProvider>
        } />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
