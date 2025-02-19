import { useLogin, useLogout, usePrivy } from '@privy-io/react-auth'
import { Button } from 'primereact/button'
import { useEffect } from 'react'

export default function () {
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
          disableSignup: true
        })
      }
    },
    [ready, authenticated]
  )
  return ready && authenticated && <>
    <h2>
      Buyer
    </h2>
    <Button onClick={logout}>Logout</Button>
  </>
}
