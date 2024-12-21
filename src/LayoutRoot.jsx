import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
function LayoutRoot() {
  return (
    <div>
      <div>
      <Header />
        <Outlet />
      <Footer />
    </div>
    </div>
  )
}

export default LayoutRoot
