import React from 'react'
import banner from '../../../assets/MyServicesBanner/babyCareBanner.gif';
import ServiceListBox from '../../ServiceListBox/ServiceListBox';
import AppointmentForm from '../../AppointmentForm/AppointmentForm';
function BabyCareService() {
  return (
    <div className='mt-11'>
      <img src={banner} alt="" />

      <div className="grid lg:grid-cols-2 gap-12 lg:max-w-6xl max-w-2xl mx-auto mt-10 px-6 md:px-12">
        <div className="text-left space-y-8">
          <h2 className="text-gray-800 text-3xl font-bold mb-6">What Is Baby Care  ?</h2>
          <p className="mb-4 text-sm text-gray-500 leading-relaxed">
            
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
          Need someone to take care of your newborn child while you recover from the physical and mental stress of pregnancy? Home Nursing Seva provide sensitive caregivers who are well-equipped to meet your child's physical and emotional needs. A quality nursing service provide to a new born baby who needs a complete care. For first few months a new born baby needs a full attention and a good care by our well trained nurses; so rest assured while our nurse take care of your child.
          </p>
          <div className="text-left mt-20">
            <h2 className="text-blue-600 text-3xl font-extrabold mb-8">Our Services Covered under Baby Care Service</h2>
            <div className="space-y-4">
              {['Feeding', 'Sleeping', 'Diapering', 'Bathing and Hygiene', 'Health and Wellness'].map((service, index) => (
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

export default BabyCareService
