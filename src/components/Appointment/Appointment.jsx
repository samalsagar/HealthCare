import React, { useState } from 'react';
import './Appointment.css'; // Import your CSS file for the styling

function Appointment() {
  // State to control the visibility of the appointment box
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

  // Function to toggle the visibility of the appointment box
  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  return (
    <div>
      {/* Human Icon and Appointment Text */}
      <div className="human-icon-container" onClick={toggleChatbot}>
        <div className="human-icon">
          <span role="img" aria-label="human">👨‍⚕️</span> {/* Simple human emoji */}
        </div>
        <span className="appointment-text">Appointment</span>
      </div>

      {/* Appointment Box */}
      <div className={`chatbot-box ${isChatbotVisible ? 'active' : ''}`}>
        {/* Close Button */}
        <button className="close-btn" onClick={toggleChatbot}>
          ✖
        </button>

        <div className="chatbot-content">
          {/* Appointment Header */}
          <div className="chatbot-header">Make An Appointment</div>

          {/* Appointment Form */}
          <div className="chatbot-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <select>
              <option value="">Choose a Service</option>
              <option value="pregnancy">Pregnancy Care</option>
              <option value="elderly">Elderly Care</option>
              <option value="post-surgery">Post-Surgery Care</option>
              <option value="wound">Wound Care</option>
            </select>
            <textarea placeholder="Message"></textarea>
            <button type="submit" className='mb-2'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
