import { useLogin, useLogout, usePrivy } from '@privy-io/react-auth'
import { Button } from 'primereact/button'
import { useEffect } from 'react'

interface Props {
  disableSignup?: boolean
  name: string
}

export default function ({ disableSignup = false, name }: Props) {
  const { logout } = useLogout()
  const { login } = useLogin({
    onError: (e) => {
      console.error('---', e)
    },
    onComplete: console.log
  })

  const { ready, authenticated } = usePrivy()
  useEffect(
    () => {
      if (ready && !authenticated) {
        login({
          disableSignup
        })
      }
    },
    [ready, authenticated]
  )
  return ready && authenticated && <>
    <h2>
      {name}
    </h2>
    <Button onClick={logout}>Logout</Button>
  </>
}
