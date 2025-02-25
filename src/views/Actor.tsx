import { useLogin, useLogout, usePrivy } from '@privy-io/react-auth'
import { Button } from 'primereact/button'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

interface Props {
  disableSignup?: boolean
  name: string
}

export default function ({ disableSignup = false, name }: Props) {
  const navigate = useNavigate()
  const { logout } = useLogout()
  const { login } = useLogin({
    onError: (e) => {
      console.error('---', e)
      if (e === 'exited_auth_flow') {
        navigate(-1)
      }
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
