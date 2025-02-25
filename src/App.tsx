import { BrowserRouter, Route, Routes, useNavigate  } from 'react-router'
import PrivyProviderWrapper from '@/components/privyProviderWrapper'
import { Menubar } from 'primereact/menubar'
import Home from '@/views/Home'
import Actor from '@/views/Actor'
import Buyer from '@/views/Buyer'

function App () {
  const NavigationBar = () => {
    const navigate = useNavigate()
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
    return <Menubar model={items} />
  }
  return <BrowserRouter>
    <PrivyProviderWrapper>
      <main className='h-screen flex flex-col'>
        <NavigationBar/>
        <section className='prose max-w-full flex-grow overflow-y-auto p-4'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/seller" element={<Actor disableSignup name='Seller'/> } />
            <Route path="/buyer" element={<Buyer/> } />
          </Routes>
        </section>
      </main>
    </PrivyProviderWrapper>
  </BrowserRouter>
}

export default App
