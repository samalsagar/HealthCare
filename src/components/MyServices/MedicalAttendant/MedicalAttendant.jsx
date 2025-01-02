import React from 'react'
import banner from '../../../assets/MyServicesBanner/medicalAttedantBanner.gif'
import AppointmentForm from '../../AppointmentForm/AppointmentForm'
import ServiceListBox from '../../ServiceListBox/ServiceListBox'
function MedicalAttendant() {
  return (
    <div  className='mt-11'>
    <img src={banner} alt="" />

    <div className="grid lg:grid-cols-2 gap-12 lg:max-w-6xl max-w-2xl mx-auto mt-10 px-6 md:px-12">

      {/* Left Section: What is Home Nursing Care? */}
      <div className="text-left space-y-8">
        <h2 className="text-gray-800 text-3xl font-bold mb-6">What Is Medical Attendant  ?</h2>
        <p className="mb-4 text-sm text-gray-500 leading-relaxed">
        When a patient admitted in medical our best nurse gives best service instead of their family members. Due to lack of time and bad impact on their jobs or daily works, so no more family attendant require while we serve a trained nurse for attendant.
        </p>
        <p className="text-sm text-gray-500 leading-relaxed">
        A medical attendant is a healthcare professional who provides support and assistance to patients in medical settings, such as hospitals, nursing homes, or private homes. They help with various tasks related to patient care, working under the supervision of doctors or nurses. Their primary role is to ensure the comfort, safety, and well-being of patients by assisting with medical and non-medical needs.
        </p>
        <div className="text-left mt-20">
          <h2 className="text-blue-600 text-3xl font-extrabold mb-8">Our Services Covered under Medical Attendant Service</h2>
          <div className="space-y-4">
            {['Patient Assistance', 'Monitoring Health', 'Medication Management', 'Mobility Support', 'Emotional Support'].map((service, index) => (
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

export default MedicalAttendant
