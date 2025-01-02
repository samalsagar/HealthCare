import React from 'react';
import banner from '../../../assets/nursingBanner.gif';
import AppointmentForm from '../../AppointmentForm/AppointmentForm';
import ServiceListBox from '../../ServiceListBox/ServiceListBox';

function NurshingService() {
  return (
    <div className="bg-gray-100 mt-11">
      <img src={banner} alt="Home Nursing Banner" className="" />

      <div className="grid lg:grid-cols-2 gap-12 lg:max-w-6xl max-w-2xl mx-auto mt-10 px-6 md:px-12">

        {/* Left Section: What is Home Nursing Care? */}
        <div className="text-left space-y-8">
          <h2 className="text-gray-800 text-3xl font-bold mb-6">What Is Home Nursing Service ?</h2>
          <p className="mb-4 text-sm text-gray-500 leading-relaxed">
          Nursing services is a service where our best nurses are provide a wide range of service  that can be easily administered at your home. Home Nursing Seva (HNS) service are usually cheaper than hospitals and nursing homes. HNS offers personalized nursing care at home and gets integrated into the patient’s family and develops an emotional bond with the patient and their family.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
            Home nursing care is often personalized to meet the specific needs of the patient, and it aims to promote comfort, independence, and overall health while reducing the need for hospital visits or stays.
          </p>
          <div className="text-left mt-20">
            <h2 className="text-blue-600 text-3xl font-extrabold mb-8">Our Services Covered under Home Nursing Service</h2>
            <div className="space-y-4">
              {['Personalized Healthcare at Home', 'Post-Surgical Care', 'Elderly Care and Support', 'Health Monitoring', 'Health Care', 'Nutritional Support'].map((service, index) => (
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
  );
}

export default NurshingService;
