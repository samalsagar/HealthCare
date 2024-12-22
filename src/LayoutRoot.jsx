import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Appointment from './components/Appointment/Appointment'
function LayoutRoot() {
  return (
    <div>
      <div>
        <Header />
        <Outlet />
        <Footer />
        <Appointment />
      </div>
    </div>
  )
}

export default LayoutRoot
