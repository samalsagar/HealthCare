import React from 'react'
import banner from '../../../assets/MyServicesBanner/bedSideAttendanr.gif'
import AppointmentForm from '../../AppointmentForm/AppointmentForm'
import ServiceListBox from '../../ServiceListBox/ServiceListBox'
function BedSideAttendant() {
  return (
    <div  className='mt-11'>
      <img src={banner} alt="" />

      <div className="grid lg:grid-cols-2 gap-12 lg:max-w-6xl max-w-2xl mx-auto mt-10 px-6 md:px-12">

        {/* Left Section: What is Home Nursing Care? */}
        <div className="text-left space-y-8">
          <h2 className="text-gray-800 text-3xl font-bold mb-6">What Is Bedside Attendant  ?</h2>
          <p className="mb-4 text-sm text-gray-500 leading-relaxed">
          Home Nursing Seva provides trained nurse who will care with all the relevant procedures involved in the care of bedridden patients. They are experienced in providing assistance with all Activities-of-Daily-Living (ADL) including personal care, bathing assistance and mobility assistance to elderly people and post-operative patients who are in Bed.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
          A bedside attendant plays a vital role in patient care by assisting with daily activities such as personal hygiene, feeding, and mobility, while also monitoring vital signs, observing changes in health, and offering emotional support. They ensure a safe and comfortable environment, provide companionship, and communicate with healthcare teams and family members to meet the patient's physical and emotional needs.
          </p>
          <div className="text-left mt-20">
            <h2 className="text-blue-600 text-3xl font-extrabold mb-8">Our Services Covered under Bedside Attendant Service</h2>
            <div className="space-y-4">
              {['Personal Care Assistance', 'Monitoring and Reporting', 'Mobility Assistance', ' Feeding and Nutrition', 'Emotional Support'].map((service, index) => (
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

export default BedSideAttendant
