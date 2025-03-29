import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import LayoutRoot from './LayoutRoot.jsx'
import Appointment from './components/Appointment/Appointment.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import AboutStaff from './components/AboutStaff/AboutStaff.jsx'
import NurshingService from './components/MyServices/NursingService/NurshingService.jsx'
import PathoLabService from './components/MyServices/PathoLabService/PathoLabService.jsx'
import BabyCareService from './components/MyServices/BabyCareService/BabyCareService.jsx'
import PhysiotherapyService from './components/MyServices/PhysiotherapyService/PhysiotherapyService.jsx'
import PregnancyCareService from './components/MyServices/PregnancyCareService/PregnancyCareService.jsx'
import HomeAttendantService from './components/MyServices/HomeAttendantService/HomeAttendantService.jsx'
import CriticalCareService from './components/MyServices/CriticalCareService/CriticalCareService.jsx'
import SeniorCitizenService from './components/MyServices/SeniorCitizenService/SeniorCitizenService.jsx'
import DoctorConsultService from './components/MyServices/DoctorConsultService/DoctorConsultService.jsx'
import Gallery from './components/Gallery/Gallery.jsx'
import Carrer from './components/Carrer/Carrer.jsx'
import Enquiry from './components/Enquiry/Enquiry.jsx'
import BedSideAttendant from './components/MyServices/BedSideAttendant/BedSideAttendant.jsx'
import MedicalAttendant from './components/MyServices/MedicalAttendant/MedicalAttendant.jsx'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<LayoutRoot />} basename='/'>
        <Route path='' element={<Home /> }/>
        <Route path='aboutus' element={<AboutUs /> }/>
        <Route path='staff' element={<AboutStaff /> }/>
        <Route path='nurse' element={<NurshingService /> }/>
        <Route path='bedside' element={<BedSideAttendant />} />
        <Route path='medicalattendant' element={<MedicalAttendant />}/>
        <Route path='patholab' element={<PathoLabService /> }/>
        <Route path='babycare' element={<BabyCareService /> }/>
        <Route path='physiotherapy' element={<PhysiotherapyService /> }/> 
        <Route path='pregnancycare' element={<PregnancyCareService /> }/> 
        <Route path='homeattendant' element={<HomeAttendantService  /> }/>  
        <Route path='criticalcare' element={<CriticalCareService /> }/> 
        <Route path='siniorcare' element={<SeniorCitizenService /> }/>
        <Route path = 'doctor' element={<DoctorConsultService /> }/>  
        <Route path='gallery' element={<Gallery /> }/>  
        <Route path='carrer' element={<Carrer /> }/>
        <Route path='enquiry' element={<Enquiry /> }/>  
      </Route>
    )
  )

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
