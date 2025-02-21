import { BrowserRouter, Link, Route, Routes  } from 'react-router'
import Home from '@/views/Home'
import Actor from '@/views/Actor'
import { Button } from 'primereact/button'
import PrivyProviderWrapper from '@/components/privyProviderWrapper'

function App () {
  return <BrowserRouter>
    <PrivyProviderWrapper>
      <main className='flex flex-col overflow-y-hidden'>
        <section className='basis-12 flex items-center border-b border-surface-500'>
          <Link to="/">
            <Button severity="secondary" icon="pi pi-home" rounded text/>
          </Link>
        </section>
        <section className='flex-grow overflow-y-auto p-4'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/seller" element={<Actor disableSignup name='Seller'/> } />
            <Route path="/buyer" element={<Actor name='Buyer'/> } />
          </Routes>
        </section>
      </main>
    </PrivyProviderWrapper>
  </BrowserRouter>
}

export default App
