import { BrowserRouter, Link, Route, Routes  } from 'react-router'
import Home from '@/views/Home'
import Actor from '@/views/Actor'
import PrivyForSellers from '@/components/privyForSellers'
import PrivyForBuyers from '@/components/privyForBuyers'
import { Button } from 'primereact/button'

function App () {
  return <BrowserRouter>
    <main className='flex flex-col overflow-y-hidden'>
      <section className='basis-12 flex items-center border-b border-surface-500'>
        <Link to="/">
          <Button severity="secondary" icon="pi pi-home" rounded text/>
        </Link>
      </section>
      <section className='flex-grow overflow-y-auto p-4'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/seller"
            element={
              <PrivyForSellers>
                <Actor disableSignup name='Seller'/>
              </PrivyForSellers>
            } />
          <Route
            path="/buyer"
            element={
              <PrivyForBuyers>
                <Actor name='Buyer'/>
              </PrivyForBuyers>
            } />
        </Routes>
      </section>
    </main>
  </BrowserRouter>
}

export default App
