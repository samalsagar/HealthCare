import React from 'react'
import banner from '../../../assets/MyServicesBanner/seniorCitizenBanner.gif';
import AppointmentForm from '../../AppointmentForm/AppointmentForm';
import ServiceListBox from '../../ServiceListBox/ServiceListBox';
function SeniorCitizenService() {
  return (
    <div  className='mt-11'>
    <img src={banner} alt="" />

    <div className="grid lg:grid-cols-2 gap-12 lg:max-w-6xl max-w-2xl mx-auto mt-10 px-6 md:px-12">

      {/* Left Section: What is Home Nursing Care? */}
      <div className="text-left space-y-8">
        <h2 className="text-gray-800 text-3xl font-bold mb-6">What Is Senior Citizen Care  ?</h2>
        <p className="mb-4 text-sm text-gray-500 leading-relaxed">
        Senior citizen care is specialized care that is designed to meet the needs and requirements of senior citizens at various stages of life. A large number of senior citizens still live with their family but in today’s situation, there are cases when most family members work and are unable to give proper attention and care to their ailing. So no more family attention require while our trained nurse take care for senior citizen.
        </p>
        <p className="text-sm text-gray-500 leading-relaxed">
        Senior citizen care refers to the specialized care and support provided to elderly individuals, addressing their physical, emotional, social, and medical needs. As people age, they may face challenges such as reduced mobility, chronic health conditions, cognitive decline, and emotional changes, which require different forms of assistance. Senior citizen care can take place in a variety of settings, including at home, assisted living facilities, nursing homes, or hospitals.
        </p>
        <div className="text-left mt-20">
          <h2 className="text-blue-600 text-3xl font-extrabold mb-8">Our Services Covered under Senior Citizen Care Service</h2>
          <div className="space-y-4">
            {['In-Home Care', 'Personal Care', '24/7 Support', 'Pain and Symptom Management', 'Emotional Support'].map((service, index) => (
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

export default SeniorCitizenService
