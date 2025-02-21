import { PrivyProvider, type PrivyProviderProps } from '@privy-io/react-auth'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

type PrivyProviderConfigs = Record<string, Omit<PrivyProviderProps, 'children'>>

const privyProviderConfigs: PrivyProviderConfigs = {
  seller: {
    appId: import.meta.env.VITE_PRIVY_S_APP_ID,
    clientId: import.meta.env.VITE_PRIVY_S_CLIENT_ID,
    config: {
      loginMethods: ['email']
    }
  },
  buyer: {
    appId: import.meta.env.VITE_PRIVY_B_APP_ID,
    clientId: import.meta.env.VITE_PRIVY_B_CLIENT_ID,
    config: {
      loginMethods: ['email']
    }
  }
}

export default function ({ children }: React.PropsWithChildren) {
  const [privyProviderProps, setPrivyProviderProps] = useState<PrivyProviderConfigs[string]>(privyProviderConfigs.seller)
  const location = useLocation()
  useEffect(
    () => {
      const providerFor = location.pathname.match(/[/](?<isFor>[^/]*)$/)?.groups?.isFor
      console.log('Detected providerFor:', providerFor)
      if (providerFor && providerFor in privyProviderConfigs) {
        setPrivyProviderProps(privyProviderConfigs[providerFor])
      }
    },
    [location]
  )
  console.log(privyProviderProps?.appId)
  return <PrivyProvider {...privyProviderProps} >
    {children}
  </PrivyProvider>
}
