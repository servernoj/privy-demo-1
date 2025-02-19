import { PrivyProvider } from '@privy-io/react-auth'

export default function ({ children }: React.PropsWithChildren) {
  return <PrivyProvider
    key='seller'
    appId={import.meta.env.VITE_PRIVY_S_APP_ID}
    clientId={import.meta.env.VITE_PRIVY_S_CLIENT_ID}
    config={{
      loginMethods: ['email']
    }}>
    {children}
  </PrivyProvider>
}
