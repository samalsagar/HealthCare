import React from 'react'
import banner from '../../../assets/MyServicesBanner/pregnancyCareBanner.gif';
import ServiceListBox from '../../ServiceListBox/ServiceListBox';
import AppointmentForm from '../../AppointmentForm/AppointmentForm';
function PregnancyCareService() {
  return (
    <div  className='mt-11'>
    <img src={banner} alt="" />

    <div className="grid lg:grid-cols-2 gap-12 lg:max-w-6xl max-w-2xl mx-auto mt-10 px-6 md:px-12">

      {/* Left Section: What is Home Nursing Care? */}
      <div className="text-left space-y-8">
        <h2 className="text-gray-800 text-3xl font-bold mb-6">What Is Pregnancy Care  ?</h2>
        <p className="mb-4 text-sm text-gray-500 leading-relaxed">
        Home Nursing Seva provide nursing service during pregnancy time for smooth health for both mother and baby. During pregnancy time our nurse will check all routine details for a pregnancy mother like Foods, Medicines, exercise and etc with an affordable price.
        </p>
        <p className="text-sm text-gray-500 leading-relaxed">
        Pregnancy care refers to the medical and personal care provided to a woman during pregnancy to ensure the health and well-being of both the mother and the developing baby. Proper pregnancy care is essential for a successful pregnancy, reducing risks, preventing complications, and promoting a healthy outcome for both the mother and the child. It encompasses regular check-ups, prenatal care, and lifestyle adjustments, and includes emotional support throughout the pregnancy journey.
        </p>
        <div className="text-left mt-20">
          <h2 className="text-blue-600 text-3xl font-extrabold mb-8">Our Services Covered under Pregnancy Care Service</h2>
          <div className="space-y-4">
            {['Prenatal Care', 'Nutrition and Diet', 'Exercise and Physical Activity', 'Mental and Emotional Support', 'Emotional Support'].map((service, index) => (
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

export default PregnancyCareService
