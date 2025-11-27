import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Index from './layout'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import Products from './pages/product/Products'
import SingleProduct from './pages/product/SingleProduct'
import Cart from './pages/product/Cart'

const App = () => {
  return (
    < >
      <div className='font-display'>

        <Routes>
          <Route path='/' element={<Index />}>
            <Route index path='/home' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/cart/:id' element={<SingleProduct />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
          </Route>
        </Routes>
      </div>

    </>
  )
}

export default App
