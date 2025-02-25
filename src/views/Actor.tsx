import { useLogin, useLogout, useModalStatus, usePrivy } from '@privy-io/react-auth'
import { Button } from 'primereact/button'
import { useEffect } from 'react'

interface Props {
  disableSignup?: boolean
  name: string
}

export default function ({ disableSignup = false, name }: Props) {
  const { isOpen: isModalOpen } = useModalStatus()
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
      if (ready && !isModalOpen && !authenticated) {
        login({
          disableSignup
        })
      }
    },
    [ready, authenticated, isModalOpen]
  )
  return ready && authenticated && <section className='flex flex-col items-start gap-8'>
    <h2 className='p-0 m-0'>
      {name}
    </h2>
    <Button onClick={logout}>Logout</Button>
  </section>
}
