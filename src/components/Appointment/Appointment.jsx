import React, { useState, useRef, useEffect } from 'react';
import './Appointment.css'; 
import axios from 'axios';
import WhatsApp from '../Whatsapp/Whatsapp';

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
      setIsChatbotVisible(false);
      setName('');
      setpatientName('');
      setpatientage('');
      setmobileNumber('');
      setarea('');
      setservice('');
    });
  };

  const [name, setName] = useState('');
  const [patientName, setpatientName] = useState('');
  const [patientage, setpatientage] = useState('');
  const [mobileNumber, setmobileNumber] = useState('');
  const [area, setarea] = useState('');
  const [service, setservice] = useState('');

  return (
    <div className=''>
      {/* Appointment Box */}
      <div className={`chatbot-box ${isChatbotVisible ? 'active' : ''}`} ref={chatbotRef}>
        {/* Close Button */}
        <button className="close-btn" onClick={toggleChatbot}>
          ✖
        </button>

        <div className="chatbot-content">
          <div className="chatbot-header">Book Appointment</div>

          <div className="chatbot-form">
            <input 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              type="text" 
              placeholder="Your Name" 
            />
            <input
              value={patientName}
              onChange={(e) => setpatientName(e.target.value)}
              required
              type="text" 
              placeholder="Patient Name" 
            />

            <input 
              value={patientage}
              onChange={(e) => setpatientage(e.target.value)}
              required
              type="text" 
              placeholder="Patient Age" 
            />

            <input 
              value={mobileNumber}
              onChange={(e) => setmobileNumber(e.target.value)}
              required
              type="text" 
              placeholder="Mobile Number" 
            />

            <input 
              value={area}
              onChange={(e) => setarea(e.target.value)}
              type="text" 
              placeholder="Area" 
            />
            <select onChange={(e) => setservice(e.target.value)} value={service}>
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

            <button type="submit" className="mb-2" onClick={handlesubmit}>Submit</button>
          </div>
        </div>
      </div>

      {/* WhatsApp Component */}
      <WhatsApp isChatbotVisible={isChatbotVisible} />
    </div>
  );
}

export default Appointment;
