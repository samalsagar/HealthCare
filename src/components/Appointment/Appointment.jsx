import React, { useState } from 'react';
import './Appointment.css'; // Import your CSS file for the styling

function Appointment() {
  let [isChatbotVisible, setIsChatbotVisible] = useState(false);

 
  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
    setIsChatbotVisible(false)
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
          <div className="chatbot-header">Make An Appointment</div>

          <div className="chatbot-form">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Number" />
            <input type="text" placeholder="Your city" />
            <select>
              <option value="#">Choose a Service</option>
              <option value="Nursing Service">Nursing Service</option>
              <option value="Patho Lab Test">Patho Lab Test</option>
              <option value="Baby Care">Baby Care</option>
              <option value="physiotherapy Service">physiotherapy Service</option>
              <option value="Pregnancy Care">Pregnancy Care</option>
              <option value="Home Attendant">Home Attendant</option>
              <option value="Crtical Care">Crtical Care</option>
              <option value="Senior Citizen ">Senior Citizen</option>
              <option value="Doctor Consultation">Doctor Consultation</option>
            </select>
            <textarea placeholder="Describe your requirement" rows="1" cols="20"></textarea>
            <button type="submit" className='mb-2' onClick={handlesubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
