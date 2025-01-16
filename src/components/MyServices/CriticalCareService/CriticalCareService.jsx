import React from 'react'
// import banner from '../../../assets/MyServicesBanner/criticalCareBanner.gif'
// import importFiles from '../../importFiles'
import banner from '../../../assets/MyServicesBanner/criticalCareBanner.gif';
import ServiceListBox from '../../ServiceListBox/ServiceListBox';
import AppointmentForm from '../../AppointmentForm/AppointmentForm';
// import ServiceListBox from '../../ServiceListBox/ServiceListBox'

function CriticalCareService() {
  return (
    // <div className='mt-11'>
    //   <img src={importFiles.commingsoon} alt="comming soon" className='w-full' />
    //   <div className="mt-10">
    //     <ServiceListBox />
    //   </div>
    // </div>
    <div className='mt-11'>
    <img src={banner} alt="" />

    <div className="grid lg:grid-cols-2 gap-12 lg:max-w-6xl max-w-2xl mx-auto mt-10 px-6 md:px-12">
      <div className="text-left space-y-8">
        <h2 className="text-gray-800 text-3xl font-bold mb-6">What Is Critical Care  ?</h2>
        <p className="mb-4 text-sm text-gray-500 leading-relaxed">
          
        </p>
        <p className="text-sm text-gray-500 leading-relaxed">
        Home nursing seva provides best nurses  for critical patients with essential medical care in the comfort of their own homes, ensuring that they receive personalized attention and support tailored to their specific health needs. These seva often include skilled nursing care, medication management, wound care, respiratory support, and monitoring of vital signs, all delivered by trained healthcare professionals. This approach not only helps manage complex medical conditions but also enhances the patient's quality of life and fast recovery with provides peace of mind to their families.
        </p>
        <div className="text-left mt-20">
          <h2 className="text-blue-600 text-3xl font-extrabold mb-8">Our Services Covered under Critical Care Service</h2>
          <div className="space-y-4">
            {['Emergency Stabilization', 'Specialized Medical Equipment', 'Post-operative Recovery', 'Pain Management', 'Intensive Monitoring'].map((service, index) => (
              <p key={index} className="text-sm text-gray-600 flex items-center space-x-2 transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500 hover:font-medium">
                <span className="text-blue-500">✔</span>
                <span>{service}</span>
              </p>
            ))}
          </div>
        </div>
      </div>


      {/* Right Section: Appointment Form */}
      <div className="space-y-8">
        <AppointmentForm />
      </div>
    </div>

    <div className="mt-10">
      <ServiceListBox />
    </div>
  </div>
  )
}

export default CriticalCareService
