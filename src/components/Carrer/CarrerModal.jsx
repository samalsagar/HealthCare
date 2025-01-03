import React from 'react';

const CarrerModal = ({ isOpen, onClose, jobDetails }) => {
  // Close the modal when the backdrop is clicked
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); 
    }
  };

  const handleModalContentClick = (e) => {
    e.stopPropagation(); // Prevent click from bubbling up to the backdrop
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleBackdropClick} // Add click listener to backdrop
    >
      <div
        className="bg-white p-6 rounded-md shadow-md w-[700px]"  // Increased width here to 700px
        onClick={handleModalContentClick}
      >
        <h3 className="text-xl font-bold text-center mb-4">{jobDetails.title}</h3>
        
        <p className="mb-2 text-left"><strong>Job Type:</strong> {jobDetails.type}</p>
        <p className="mb-2 text-left"><strong>Location:</strong> {jobDetails.location}</p>

        {/* Display description if exists */}
        {jobDetails.description && (
          <p className="mb-4 text-left"><strong>Description:</strong> {jobDetails.description} :</p>
        )}

        <div className="mb-4">
          <ul className="list-none pl-0">
            <li className='text-left'><strong>Openings:</strong> {jobDetails.openings} : For Females only</li>
            <li className='text-left'><strong>Languages:</strong> {jobDetails.languages} : Odia, English, Hindi</li>
            <li className='text-left'><strong>Experience:</strong> {jobDetails.experience} : Freshers / Experience holders are welcome</li>
            <li className='text-left'><strong>Salary:</strong> {jobDetails.salary} " Rs. 7,000.00 (Seven Thousand) for Fresher's and For experience holders Salary confirm after discussion.</li>
            <li className='text-left'><strong>Education:</strong> {jobDetails.education} " 10th pass/+2 or More or A.N.M/G.N.M</li>
          </ul>
        </div>

        <p className="mb-4 text-left">
          <strong>To Apply:</strong> Please send your CV to 
          <a href="mailto:contact@homenursingseva.com" className="text-blue-600"> contact@homenursingseva.com</a>.
        </p>

        <button
          className="w-full bg-blue-500 text-white py-2 rounded-md"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CarrerModal;
