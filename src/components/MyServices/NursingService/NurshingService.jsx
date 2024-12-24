import React from 'react';
import banner from '../../../assets/nursingBanner.gif';
import AppointmentForm from '../../AppointmentForm/AppointmentForm';
import ServiceListBox from '../../ServiceListBox/ServiceListBox';

function NurshingService() {
  return (
    <div className="bg-gray-100 mt-7">
      {/* Banner Image */}
      <img src={banner} alt="Home Nursing Banner" className="" />

      {/* Main Content Section */}
      <div className="grid lg:grid-cols-2 gap-12 lg:max-w-6xl max-w-2xl mx-auto mt-10 px-6 md:px-12">

        {/* Left Section: What is Home Nursing Care? */}
        <div className="text-left space-y-8">
          <h2 className="text-gray-800 text-3xl font-bold mb-6">What Is Home Nursing Care?</h2>
          <p className="mb-4 text-sm text-gray-500 leading-relaxed">
            Home nursing care refers to a range of healthcare services provided by professional nurses in the comfort of a patient's home. It is designed for individuals who need medical assistance or support but prefer to remain in a familiar environment rather than being admitted to a hospital or clinic.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
            Home nursing care is often personalized to meet the specific needs of the patient, and it aims to promote comfort, independence, and overall health while reducing the need for hospital visits or stays.
          </p>
          <div className="text-left mt-20">
            <h2 className="text-blue-600 text-3xl font-extrabold mb-8">Our Services Covered under Home Nursing Care</h2>
            <div className="space-y-4">
              {['House Hold Maintenance', 'Transportation', 'Home Modification', 'Personal Care', 'Health Care', 'Day Programme'].map((service, index) => (
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

      {/* Explore Our Top Healthcare Services and Post-Surgical Care */}

      {/* Post-Surgical Care Section */}
      <div className="mt-10 px-6 md:px-12">
        {/* Attractive Heading */}
        <h2 className="text-4xl font-extrabold text-blue-700 text-center relative mb-10">
          {/* <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-16 h-1 bg-blue-500 rounded-full"></span> */}
          Bringing Care and Comfort Right to Your Door Step
          {/* <span className="absolute right-0 top-1/2 transform -translate-y-1/2 w-16 h-1 bg-blue-500 rounded-full"></span> */}
        </h2>

        {/* Grid for Post-Surgical Care, Injection, Oxygen Administration */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Post-Surgical Care */}
          <div className="space-y-6 p-6 bg-white border border-gray-200 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:border-blue-500">
            <h3 className="text-xl font-bold text-blue-500">Post-Surgical Care:</h3>
            <p className="text-md text-gray-600">
              Post-surgical care is an essential aspect of a patient's recovery process after undergoing surgery. It involves a variety of treatments, support, and medical monitoring aimed at promoting healing, preventing complications, and ensuring the patient regains full function as quickly and safely as possible.
            </p>
          </div>

          {/* Injection */}
          <div className="space-y-6 p-6 bg-white border border-gray-200 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:border-blue-500">
            <h3 className="text-xl font-bold text-blue-500">Injection:</h3>
            <p className="text-lg text-gray-600">
              Save yourself the trouble of travel and long hospital hours for a minor process like injection administration or IV infusion. Just book with us a home nurse, and an experienced and registered nurse will come visit you at home to administer the required injection or IV infusion.
            </p>
          </div>

          {/* Oxygen Administration */}
          <div className="space-y-6 p-6 bg-white border border-gray-200 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:border-blue-500">
            <h3 className="text-xl font-bold text-blue-500">Oxygen Administration:</h3>
            <p className="text-lg text-gray-600">
              Oxygen administration is required in both acute and chronic conditions like trauma, hemorrhage, shock, breathlessness, pulmonary disease, and more. Don’t panic if you require one. Call a Portea nurse home and sit back, while she does the needful.
            </p>
          </div>
        </div>
      </div>

      {/* Service List Box */}
      <div className="mt-10">
        <ServiceListBox />
      </div>
    </div>
  );
}

export default NurshingService;
