import { Menubar } from 'primereact/menubar'
import { Outlet, useNavigate } from 'react-router'

export default function ()  {
  const navigate = useNavigate()
  const isIframe = window.self !== window.top
  const items = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      command: () => {
        navigate('/')
      }
    },
    {
      label: 'Seller',
      icon: 'pi pi-briefcase',
      command: () => {
        navigate('/seller')
      }
    },
    {
      label: 'Buyer',
      icon: 'pi pi-credit-card',
      command: () => {
        navigate('/buyer')
      }
    }
  ]
  return <main className='h-full flex flex-col'>
    {
      isIframe
        ? <article className='prose max-w-full flex-grow overflow-y-auto'>
          <Outlet/>
        </article>
        : <>
          <Menubar model={items} />
          <article className='prose max-w-full flex-grow overflow-y-auto p-4'>
            <Outlet/>
          </article>
        </>
    }
  </main>
}
