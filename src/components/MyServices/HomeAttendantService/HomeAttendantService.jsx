import React from 'react'
// import banner from '../../../assets/homeBanner.gif';
import banner from '../../../assets/MyServicesBanner/homeAttendantBanner.gif'
import AppointmentForm from '../../AppointmentForm/AppointmentForm';
import ServiceListBox from '../../ServiceListBox/ServiceListBox';
function HomeAttendantService() {
  return (
    <div className='mt-11'>
      <img src={banner} alt="" />

      <div className="grid lg:grid-cols-2 gap-12 lg:max-w-6xl max-w-2xl mx-auto mt-10 px-6 md:px-12">

        {/* Left Section: What is Home Nursing Care? */}
        <div className="text-left space-y-8">
          <h2 className="text-gray-800 text-3xl font-bold mb-6">What Is Home Attendant Service ?</h2>
          <p className="mb-4 text-sm text-gray-500 leading-relaxed">
          Home Nursing Seva is renowned for delivering exceptional in-home patient attendant services for both male and female patients personal care and environmental services.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
          Home attendants can work in a variety of settings, including private homes, assisted living facilities, or rehabilitation centers. They are typically hired through home care agencies or independently. Many home attendants undergo training in areas such as first aid, CPR, and patient care techniques, although the specific requirements may vary based on location and employer.
          </p>
          <div className="text-left mt-20">
            <h2 className="text-blue-600 text-3xl font-extrabold mb-8">Our Services Covered under Home Attendant Service</h2>
            <div className="space-y-4">
              {['Personal Care at Home', 'Medication Reminders', 'Mobility Assistance', 'Medication Reminders and Support', 'Companionship and Emotional Support'].map((service, index) => (
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

export default HomeAttendantService
