import { PrivyProvider, PrivyProviderProps } from '@privy-io/react-auth'
import { PropsWithChildren } from 'react'

type Props = {
  provider: Omit<PrivyProviderProps, 'children'>
  url: string
}

export default function (props:PropsWithChildren<Props>) {
  const isIframe = window.self !== window.top
  return isIframe
    ? <PrivyProvider {...props.provider}>
      {props.children}
    </PrivyProvider>
    : <iframe
      src={props.url}
      width="100%"
      height="100%"
    ></iframe>
}
