import React from 'react'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import { Outlet } from 'react-router-dom'

const Index = () => {
  return (
    <div>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Index