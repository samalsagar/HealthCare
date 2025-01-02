import React, { useState } from 'react';
import banner from '../../assets/MyServicesBanner/carrerBanner.gif';
import logo from '../../assets/logo.jpg';
import Modal from './CarrerModal'; // Import the Modal component

function Carrer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentJob, setCurrentJob] = useState(null);

  // Function to open the modal with job details
  const openModal = (jobDetails) => {
    setCurrentJob(jobDetails);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentJob(null);
  };

  // Job data to pass to modal
  const jobData = [
    {
      title: 'Job Name',
      type: 'Full-Time',
      location: 'Remote',
      // description: 'Build amazing user interfaces with React and other modern technologies.',
    },
    {
      title: 'job Name',
      type: 'Part-Time',
      location: 'India',
      description: 'Develop scalable server-side applications using Node.js and databases.',
    },
    {
      title: 'Job Name',
      type: 'Freelance',
      location: 'India',
      description: 'Lead the development of new product features and user experiences.',
    },
  ];

  return (
    <div className="mt-11">
      <img src={banner} alt="Banner" />

      <section className="py-24 bg-blueGray-50 overflow-hidden">
        <div className="container px-4 mx-auto">
          <h2 className="mb-5 text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none text-blue-600 transition duration-500 ease-in-out transform hover:scale-105">
            Featured Jobs
          </h2>
          <p className="mb-16 text-lg text-gray-600 text-center font-medium leading-normal md:max-w-lg mx-auto">
            Explore amazing career opportunities with us. Join our growing team!
          </p>

          <div className="md:max-w-6xl mx-auto">
            <div className="flex flex-wrap -m-3.5 mb-10 space-y-8 md:space-y-0 md:flex-row justify-center">
              {jobData.map((job, index) => (
                <div key={index} className="w-full md:w-1/3 p-3.5">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      openModal(job); // Open the modal with the current job details
                    }}
                    className="block transform transition duration-500 ease-in-out hover:scale-105"
                  >
                    <div
                      className="relative p-6 h-full bg-gradient-to-r from-blue-300 to-yellow-200 border-2 border-transparent rounded-xl shadow-lg hover:shadow-2xl hover:border-pink-400 transform transition-all duration-500 ease-in-out hover:scale-105"
                      style={{
                        // backgroundImage: `url(${logo})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                     
                      }}
                    >
                      <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>
                      <div className="relative z-10 flex flex-col justify-between h-full p-6 text-white">
                        <div className="flex-1">
                          <h3 className="mb-2 text-lg font-bold font-heading leading-snug text-white hover:text-yellow-400 transition duration-300 ease-in-out transform hover:translate-x-2 hover:scale-105">
                            {job.title}
                          </h3>
                          <p className="text-sm font-medium">
                            <span>{job.type}</span>
                            <span className="px-2">•</span>
                            <span>{job.location}</span>
                          </p>
                        </div>
                        <div className="flex-1 flex justify-end mt-4">
                          <img
                            src={logo}
                            alt="Company Logo"
                            className="h-10 opacity-75 transition duration-300 ease-in-out hover:opacity-100 hover:scale-110 transform rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} jobDetails={currentJob} />
    </div>
  );
}

export default Carrer;
