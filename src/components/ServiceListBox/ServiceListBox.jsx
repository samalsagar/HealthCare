import React from 'react';
// import nurse from '../../assets/nurse.png';
// import patholab from '../../assets/patholab.png';
// import baby from '../../assets/Baby.png';
// import therapy from '../../assets/therapy.png';
// import preg from '../../assets/preg.png';
// import attendant from '../../assets/attendant.png';
// import care from '../../assets/critical.png';
// import citizen from '../../assets/citizen.png';
// import doctor from '../../assets/doctor.png';
import importFiles from '../importFiles';
import { Link } from 'react-router-dom';
function ServiceListBox() {
  return (
    <div className="max-w-7xl mx-auto mt-12 px-6 pb-10">
      <h1 className="text-center text-xl font-semibold text-gray-800 mb-8 md:mb-12 px-4 
              sm:text-4xl leading-tight tracking-normal 
              transition-all duration-300 transform hover:scale-105 hover:text-teal-500">
        Explore Our Top Healthcare Services
      </h1>


      {/* Container for All Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Service 1 */}
        <Link to="/nurse">
          <div className="bg-white p-6 rounded-lg shadow-md transition-all transform hover:scale-105 hover:shadow-2xl cursor-pointer hover:bg-blue-50 hover:translate-y-2">
            <div className="flex items-center space-x-4">
              <div className="text-blue-500 text-4xl transition-all transform hover:scale-110">
                <img src={importFiles.nurse} alt="Baby care icon" className="w-10 h-10" />
              </div>
              <div className="flex-grow">
                <h2 className="text-lg font-bold text-gray-800 mb-2 transition-all duration-300 hover:text-blue-600">
                  Nursing Service
                </h2>
              </div>
            </div>
          </div></Link>



        <Link to="/homeattendant">
          <div className="bg-white p-6 rounded-lg shadow-md transition-all transform hover:scale-105 hover:shadow-2xl cursor-pointer hover:bg-blue-50 hover:translate-y-2">
            <div className="flex items-center space-x-4">
              <div className="text-blue-500 text-4xl transition-all transform hover:scale-110">
                <img src={importFiles.attendant} alt="Home Attendant icon" className="w-10 h-10" />
              </div>
              <div className="flex-grow">
                <h2 className="text-lg font-bold text-gray-800 mb-2 transition-all duration-300 hover:text-blue-600">
                  Home Attendant Service
                </h2>
              </div>
            </div>
          </div>
        </Link>

        
        <Link to="/">
          <div className="bg-white p-6 rounded-lg shadow-md transition-all transform hover:scale-105 hover:shadow-2xl cursor-pointer hover:bg-blue-50 hover:translate-y-2">
            <div className="flex items-center space-x-4">
              <div className="text-blue-500 text-4xl transition-all transform hover:scale-110">
                <img src={importFiles.bed} alt="Home Attendant icon" className="w-10 h-10" />
              </div>
              <div className="flex-grow">
                <h2 className="text-lg font-bold text-gray-800 mb-2 transition-all duration-300 hover:text-blue-600">
                  Bedside Attendant Service
                </h2>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/">
          <div className="bg-white p-6 rounded-lg shadow-md transition-all transform hover:scale-105 hover:shadow-2xl cursor-pointer hover:bg-blue-50 hover:translate-y-2">
            <div className="flex items-center space-x-4">
              <div className="text-blue-500 text-4xl transition-all transform hover:scale-110">
                <img src={importFiles.medical} alt="Home Attendant icon" className="w-10 h-10" />
              </div>
              <div className="flex-grow">
                <h2 className="text-lg font-bold text-gray-800 mb-2 transition-all duration-300 hover:text-blue-600">
                 Medical Attendant Service
                </h2>
              </div>
            </div>
          </div>
        </Link>

        
        {/* Service 8 */}
        <Link to="/siniorcare">
          <div className="bg-white p-6 rounded-lg shadow-md transition-all transform hover:scale-105 hover:shadow-2xl cursor-pointer hover:bg-blue-50 hover:translate-y-2">
            <div className="flex items-center space-x-4">
              <div className="text-blue-500 text-4xl transition-all transform hover:scale-110">
                <img src={importFiles.seniorcitizen} alt="Senior Citizen Service icon" className="w-10 h-10" />
              </div>
              <div className="flex-grow">
                <h2 className="text-lg font-bold text-gray-800 mb-2 transition-all duration-300 hover:text-blue-600">
                  Senior Citizen Service
                </h2>
              </div>
            </div>
          </div>
        </Link>

        
        {/* Service 5 */}
        <Link to="/pregnancycare">
          <div className="bg-white p-6 rounded-lg shadow-md transition-all transform hover:scale-105 hover:shadow-2xl cursor-pointer hover:bg-blue-50 hover:translate-y-2">
            <div className="flex items-center space-x-4">
              <div className="text-blue-500 text-4xl transition-all transform hover:scale-110">
                <img src={importFiles.preg} alt="Pregnancy Care icon" className="w-10 h-10" />
              </div>
              <div className="flex-grow">
                <h2 className="text-lg font-bold text-gray-800 mb-2 transition-all duration-300 hover:text-blue-600">
                  Pregnancy Care Service
                </h2>
              </div>
            </div>
          </div>
        </Link>

         {/* Service 3 */}
         <Link to="/babycare">
          <div className="bg-white p-6 rounded-lg shadow-md transition-all transform hover:scale-105 hover:shadow-2xl cursor-pointer hover:bg-blue-50 hover:translate-y-2">
            <div className="flex items-center space-x-4">
              <div className="text-blue-500 text-4xl transition-all transform hover:scale-110">
                <img src={importFiles.baby} alt="Baby care icon" className="w-10 h-10" />
              </div>
              <div className="flex-grow">
                <h2 className="text-lg font-bold text-gray-800 mb-2 transition-all duration-300 hover:text-blue-600">
                  Baby Care Service
                </h2>
              </div>
            </div>
          </div>
        </Link>

        {/* Service 2 */}
        <Link to="/patholab">
          <div className="bg-white p-6 rounded-lg shadow-md transition-all transform hover:scale-105 hover:shadow-2xl cursor-pointer hover:bg-blue-50 hover:translate-y-2">
            <div className="flex items-center space-x-4">
              <div className="text-blue-500 text-4xl transition-all transform hover:scale-110">
                <img src={importFiles.patholab} alt="Baby care icon" className="w-10 h-10" />
              </div>
              <div className="flex-grow">
                <h2 className="text-lg font-bold text-gray-800 mb-2 transition-all duration-300 hover:text-blue-600">
                  Patho Lab Test Service
                </h2>
              </div>
            </div>
          </div>
        </Link>

       

        {/* Service 4 */}
        <Link to="/physiotherapy">
          <div className="bg-white p-6 rounded-lg shadow-md transition-all transform hover:scale-105 hover:shadow-2xl cursor-pointer hover:bg-blue-50 hover:translate-y-2">
            <div className="flex items-center space-x-4">
              <div className="text-blue-500 text-4xl transition-all transform hover:scale-110">
                <img src={importFiles.therapy} alt="Physiotherapy icon" className="w-10 h-10" />
              </div>
              <div className="flex-grow">
                <h2 className="text-lg font-bold text-gray-800 mb-2 transition-all duration-300 hover:text-blue-600">
                  Physiotherapy Service
                </h2>
              </div>
            </div>
          </div>
        </Link>




        {/* Service 7 */}
        <Link to="/criticalcare">
          <div className="bg-white p-6 rounded-lg shadow-md transition-all transform hover:scale-105 hover:shadow-2xl cursor-pointer hover:bg-blue-50 hover:translate-y-2">
            <div className="flex items-center space-x-4">
              <div className="text-blue-500 text-4xl transition-all transform hover:scale-110">
                <img src={importFiles.criticalcare} alt="Critical Care icon" className="w-10 h-10" />
              </div>
              <div className="flex-grow">
                <h2 className="text-lg font-bold text-gray-800 mb-2 transition-all duration-300 hover:text-blue-600">
                  Critical Care Service
                </h2>
              </div>
            </div>
          </div>
        </Link>


        {/* Service 9 */}
        <Link to="/doctor">
          <div className="bg-white p-6 rounded-lg shadow-md transition-all transform hover:scale-105 hover:shadow-2xl cursor-pointer hover:bg-blue-50 hover:translate-y-2">
            <div className="flex items-center space-x-4">
              <div className="text-blue-500 text-4xl transition-all transform hover:scale-110">
                <img src={importFiles.doctor} alt="Doctor Consultation icon" className="w-10 h-10" />
              </div>
              <div className="flex-grow">
                <h2 className="text-lg font-bold text-gray-800 mb-2 transition-all duration-300 hover:text-blue-600">
                  Doctor Consultation Service
                </h2>
              </div>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default ServiceListBox;
