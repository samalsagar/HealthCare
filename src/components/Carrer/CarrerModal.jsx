import React, { useEffect } from 'react';

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
        className="bg-white p-8 rounded-xl shadow-lg w-96"
        onClick={handleModalContentClick}
      >
        <h3 className="text-2xl font-bold text-center mb-4">{jobDetails.title}</h3>
        <p className="text-gray-700 mb-4">Job Type: {jobDetails.type}</p>
        <p className="text-gray-700 mb-4">Location: {jobDetails.location}</p>
        {jobDetails.description && (
          <p className="text-gray-700 mb-4">Description: {jobDetails.description}</p>
        )}
        <button
          className="w-full bg-red-500 text-white py-2 rounded-xl"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CarrerModal;
