import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function AppointmentForm() {
  const [name, setName] = useState('');
  const [patientName, setpatientName] = useState('');
  const [patientage, setpatientage] = useState('');
  const [mobileNumber, setmobileNumber] = useState('');
  const [area, setarea] = useState('');
  const [service, setservice] = useState('');

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(name, patientName, patientage, mobileNumber, area, service);

    const data = {
      Name: name,
      PatientName: patientName,
      Patientage: patientage,
      MobileNumber: mobileNumber,
      Area: area,
      Service: service
    };
    axios.post('https://api.sheetbest.com/sheets/cf76c313-cb91-4180-b509-c3d0aaf743fb', data).then((response) => {
      Swal.fire('We Appreciate You For An Appointment', "Will get back to you soon", 'success');
      setName('');
      setpatientName('');
      setpatientage('');
      setmobileNumber('');
      setarea('');
      setservice('');
    });
  };

  return (
    <div>
      {/* Single form wrapping everything */}
      <form onSubmit={handlesubmit} className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow-lg border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-6 md:space-y-8 sm:p-8">
            <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Book Appointment
            </p>
            <div className="space-y-6">
              <div>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Enter Your Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  id="username"
                  type="text"
                />
              </div>

              <div>
                <input
                  value={patientName}
                  onChange={(e) => setpatientName(e.target.value)}
                  required
                  placeholder="Enter Patient Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  id="patientName"
                  type="text"
                />
              </div>

              <div>
                <input
                  value={patientage}
                  onChange={(e) => setpatientage(e.target.value)}
                  required
                  placeholder="Enter Patient Age"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  id="patientage"
                  type="text"
                />
              </div>

              <div>
                <input
                  value={mobileNumber}
                  onChange={(e) => setmobileNumber(e.target.value)}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter Mobile Number"
                  id="number"
                  type="number"
                />
              </div>

              <div>
                <input
                  value={area}
                  onChange={(e) => setarea(e.target.value)}
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter Your Area"
                  id="city"
                  type="text"
                />
              </div>

              <div>
                <select
                  onChange={(e) => setservice(e.target.value)}
                  value={service}
                  name="service"
                  id="service"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="#">Choose a Service</option>
                  <option value="Nursing Service">Nursing Service</option>
                  <option value="Home Attendant">Home Attendant</option>
                  <option value="Bedside Attendant">Bedside Attendant</option>
                  <option value="Medical Attendant">Medical Attendant</option>
                  <option value="Senior Citizen">Senior Citizen Care</option>
                  <option value="Pregnancy Care">Pregnancy Care</option>
                  <option value="Baby Care">Baby Care</option>
                  <option value="Critical Care">Critical Care</option>
                  <option value="Patho Lab Test">Patho Lab Test</option>
                  <option value="Physiotherapy Service">Physiotherapy</option>
                  <option value="Doctor Consultation">Doctor Consultation</option>
                </select>
              </div>

              <button
                className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-blue-800 text-white transition duration-300 ease-in-out transform hover:scale-105"
                type="submit"
              >
                Book An Appointment
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AppointmentForm;
