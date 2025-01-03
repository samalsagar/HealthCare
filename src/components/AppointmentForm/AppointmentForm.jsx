import React from 'react'
import { useState } from 'react'
import axios from 'axios'; 
import Swal from 'sweetalert2';
function AppointmentForm() {
   const [name, setName] = useState('')
     const [patientName, setpatientName] = useState('')
     const [patientage, setpatientage] = useState('')
     const [mobileNumber, setmobileNumber] = useState('')
     const [area, setarea] = useState('')
     const [service, setservice] = useState('')

     const handlesubmit = (e) => {
      e.preventDefault();
      console.log(name, patientName, patientage, mobileNumber, area, service);
      const data = {
        Name: name,
        PatientName: patientName,
        Patientage: patientage,
        MobileNumber:mobileNumber,
        Area:area,
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
       <form>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
              <div className="w-full bg-white rounded-lg shadow-lg border md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-6 md:space-y-8 sm:p-8">
                  <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Book Appointment
                  </p>


                  <div>
                    {/* <label className="block mb-2 text-sm font-medium text-gray-900 text-left">
                      Name
                    </label> */}
                    <input
                      value={name}
                      onChange={(e)=> setName(e.target.value)}
                      required
                      placeholder="Enter Your Name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      id="username"
                      type="text"
                    />
                  </div>

                  <div>
                    {/* <label className="block mb-2 text-sm font-medium text-gray-900 text-left">
                      Patient Name
                    </label> */}
                    <input
                    value={patientName}
                    onChange={(e)=>setpatientName(e.target.value)}
                    required
                      placeholder="Enter Patient Name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      id="patientName"
                      type="text"
                    />
                  </div>

                  <div>
                    {/* <label className="block mb-2 text-sm font-medium text-gray-900 text-left">
                     Age
                    </label> */}
                    <input
                     value={patientage}
                     onChange={(e)=> setpatientage(e.target.value)}
                     required
                      placeholder="Enter Patient Age"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      id="paitentage"
                      type="text"
                    />
                  </div>


                  <div>
                    {/* <label className="block mb-2 text-sm font-medium text-gray-900 text-left">
                      Mobile Number
                    </label> */}
                    <input
                    value={mobileNumber}
                    onChange={(e)=> setmobileNumber(e.target.value)}
                    required
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter Mobile Number"
                      id="number"
                      type="number"
                    />
                  </div>

                  <div>
                    {/* <label className="block mb-2 text-sm font-medium text-gray-900 text-left">
                      Area
                    </label> */}
                    <input
                    value={area}
                    onChange={(e)=> setarea(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter Your Area"
                      id="city"
                      type="text"
                    />
                  </div>


                  <div>
                    {/* <label className="block mb-2 text-sm font-medium text-gray-900 text-left">
                      Choose a Service
                    </label> */}
                    <select
                    onChange={(e)=> setservice(e.target.value)} value={service}
                      name="service"
                      id="service"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Choose Service</option>
                      <option value="nursing">Nursing Service</option>
                      <option value="patho_lab_test">Patho Lab Test</option>
                      <option value="baby_care">Baby Care</option>
                      <option value="physiotherapy">Physiotherapy</option>
                      <option value="pregnancy_care">Pregnancy Care</option>
                      <option value="home_attendant">Home Attendant</option>
                      <option value="critical_care">Critical Care</option>
                      <option value="senior_citizen">Senior Citizen</option>
                      <option value="doctor_consultation">Doctor Consultation</option>
                    </select>
                  </div>


                  

{/* 
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 text-left">
                      Your Requirement
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Describe your requirements..."
                    ></textarea>
                  </div> */}


                  <button  onClick={handlesubmit}
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
  )
}

export default AppointmentForm
