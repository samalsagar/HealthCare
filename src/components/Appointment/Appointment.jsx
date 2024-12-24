import React, { useState, useRef, useEffect } from 'react';
import './Appointment.css'; // Import your CSS file for the styling

function Appointment() {
  let [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const chatbotRef = useRef(null); // Reference to the chatbot box

  // Toggle chatbot visibility
  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  // Close the chatbot form when clicked outside
  const handleClickOutside = (e) => {
    if (chatbotRef.current && !chatbotRef.current.contains(e.target)) {
      setIsChatbotVisible(false);
    }
  };

  // Adding event listener on mount and cleaning up on unmount
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    // Prevent scrolling when chatbot is visible
    if (isChatbotVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      // Restore scroll when component is unmounted
      document.body.style.overflow = 'auto';
    };
  }, [isChatbotVisible]);

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
    setIsChatbotVisible(false);
  };

  return (
    <div className=''>
      {/* Human Icon and Appointment Text */}
      <div className="human-icon-container" onClick={toggleChatbot}>
        <div className="human-icon">
          <span role="img" aria-label="human">👨‍⚕️</span> {/* Simple human emoji */}
        </div>
        <span className="appointment-text">Appointment</span>
      </div>

      {/* Appointment Box */}
      <div className={`chatbot-box ${isChatbotVisible ? 'active' : ''}`} ref={chatbotRef}>
        {/* Close Button */}
        <button className="close-btn" onClick={toggleChatbot}>
          ✖
        </button>

        <div className="chatbot-content">
          <div className="chatbot-header">Book Appointment</div>

          <div className="chatbot-form">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Patient Name" />
            <input type="text" placeholder="Patient Age" />
            <input type="text" placeholder="Mobile Number" />
            <input type="text" placeholder="Area" />
            <select>
              <option value="#">Choose a Service</option>
              <option value="Nursing Service">Nursing Service</option>
              <option value="Patho Lab Test">Patho Lab Test</option>
              <option value="Baby Care">Baby Care</option>
              <option value="Physiotherapy Service">Physiotherapy Service</option>
              <option value="Pregnancy Care">Pregnancy Care</option>
              <option value="Home Attendant">Home Attendant</option>
              <option value="Critical Care">Critical Care</option>
              <option value="Senior Citizen">Senior Citizen</option>
              <option value="Doctor Consultation">Doctor Consultation</option>
            </select>

            <button type="submit" className="mb-2" onClick={handlesubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
