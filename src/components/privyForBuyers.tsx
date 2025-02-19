import { PrivyProvider } from '@privy-io/react-auth'

export default function ({ children }: React.PropsWithChildren) {
  return <PrivyProvider
    key='buyer'
    appId={import.meta.env.VITE_PRIVY_B_APP_ID}
    clientId={import.meta.env.VITE_PRIVY_B_CLIENT_ID}
    config={{
      loginMethods: ['email']
    }}>
    {children}
  </PrivyProvider>
}
