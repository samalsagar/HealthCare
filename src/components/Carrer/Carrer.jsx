import React, { useState, useEffect } from 'react';
import banner from '../../assets/MyServicesBanner/carrerBanner.gif';
import logo from '../../assets/logo.jpg';

function Carrer() {
  // Job data to display
  const jobData = [
    {
      title: 'Nurse',
      type: 'Full-Time',
      location: 'Bhubaneswar',
      description: 'Providing compassionate healthcare for Patients / Babies individuals in a clients/patients home or at Medical as per client request.',
      openings: 'Multiple',
      languages: 'Odia, English, Hindi',
      experience: 'Freshers / Experience holders',
      salary: 'Rs. 7,000.00 (Seven Thousand) for Freshers. For experienced holders, salary to be confirmed after discussion.',
      education: '10th pass/+2 or More or A.N.M/G.N.M',
    },
  ];

  const [showBox, setShowBox] = useState(false);

  // Using useEffect to trigger animation on component mount
  useEffect(() => {
    setShowBox(true);
  }, []);

  return (
    <div className="mt-11">
      <img src={banner} alt="Banner" className="w-full mb-10" />

      <div className="flex justify-center mb-8">
        <h2 className="text-4xl font-bold text-blue-600">Job Details</h2>
      </div>

      {/* Job Details Box with animation */}
      <div className="flex justify-center items-center">
        <div
          className={`bg-white p-6 rounded-md shadow-lg w-[700px] transition-transform duration-500 ease-in-out transform ${
            showBox ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          <h3 className="text-2xl font-semibold text-center mb-4 text-blue-700">
            {jobData[0].title}
          </h3>

          <p className="mb-2 text-left"><strong>Job Type:</strong> {jobData[0].type}</p>
          <p className="mb-2 text-left"><strong>Location:</strong> {jobData[0].location}</p>

          {/* Description */}
          {jobData[0].description && (
            <p className="mb-4 text-left"><strong>Description:</strong> {jobData[0].description}</p>
          )}

          {/* Additional Information */}
          <div className="mb-4">
            <ul className="list-none pl-0">
              <li className="text-left"><strong>Openings:</strong> {jobData[0].openings}</li>
              <li className="text-left"><strong>Languages:</strong> {jobData[0].languages}</li>
              <li className="text-left"><strong>Experience:</strong> {jobData[0].experience}</li>
              <li className="text-left"><strong>Salary:</strong> {jobData[0].salary}</li>
              <li className="text-left"><strong>Education:</strong> {jobData[0].education}</li>
            </ul>
          </div>

          {/* Apply Section */}
          <p className="mb-4 text-left">
            <strong>To Apply:</strong> Please send your CV to{' '}
            <a href="mailto:contact@homenursingseva.com" className="text-blue-600 hover:underline">
              contact@homenursingseva.com
            </a>
          </p>

         
        </div>
      </div>
    </div>
  );
}

export default Carrer;
