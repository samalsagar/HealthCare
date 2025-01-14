import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Appointment from './components/Appointment/Appointment'
import WhatsApp from './components/Whatsapp/Whatsapp'
import CallIcon from './components/Call_Icon/CallIcon'
function LayoutRoot() {
  return (
    <div>
      <div>
        <Header />
        <Outlet />
        <Footer />
        <Appointment />
        <CallIcon />
        <WhatsApp />
      </div>
    </div>
  )
}

export default LayoutRoot
