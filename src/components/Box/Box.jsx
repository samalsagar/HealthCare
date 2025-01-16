import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Box() {
    // State to manage the modal visibility
    const [isChatbotVisible, setIsChatbotVisible] = useState(false);

    // Form state for inputs
    const [name, setName] = useState('')
    const [patientName, setpatientName] = useState('')
    const [patientage, setpatientage] = useState('')
    const [mobileNumber, setmobileNumber] = useState('')
    const [area, setarea] = useState('')
    const [service, setservice] = useState('')

    // Create a ref for the modal
    const chatbotRef = useRef(null);

    // Toggle chatbot modal visibility
    const toggleChatbot = () => {
        setIsChatbotVisible(!isChatbotVisible);
    };

    const handleClickOutside = (e) => {
        // Check if the click is outside the chatbot modal
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
            document.body.style.overflow = 'auto';
        };
    }, [isChatbotVisible]);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, patientName, patientage, mobileNumber, area, service);
        const data = {
            Name: name,
            PatientName: patientName,
            Patientage: patientage,
            MobileNumber: mobileNumber,
            Area: area,
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

    return (
        <div className="fixed bottom-0 left-0 w-full shadow-md z-50 border-t-4 border-blue-500">
            <div className="h-20 w-full bg-gray-300 flex justify-center items-center">
                {/* "Book Now" Box */}
               
                {/* "24x7 Customer Service" Box */}
                <Link to="tel:+917735123124">
                    <div className="bg-green-500 text-white p-4 rounded-md shadow-md cursor-pointer me-10">
                        <span className="rounded-full shadow-lg transition-colors duration-300">
                            <span className="text-xl">📞</span>
                        </span>
                        <span className="ms-4 font-semibold">24 / 7 Customer Service</span>
                    </div>
                </Link>

                <div className="bg-blue-500 text-white p-4 rounded-md shadow-md cursor-pointer" onClick={toggleChatbot}>
                    <span className="font-semibold">👨‍⚕️ Book Now</span>
                </div>
            </div>

            {/* Modal (Appointment Booking Form) */}
            <div className={`chatbot-box ${isChatbotVisible ? 'active' : ''}`} ref={chatbotRef}>
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
                            className="modal-input"
                        />
                        <input
                            value={patientName}
                            onChange={(e) => setpatientName(e.target.value)}
                            required
                            type="text"
                            placeholder="Patient Name"
                            className="modal-input"
                        />
                        <input
                            value={patientage}
                            onChange={(e) => setpatientage(e.target.value)}
                            required
                            type="text"
                            placeholder="Patient Age"
                            className="modal-input"
                        />
                        <input
                            value={mobileNumber}
                            onChange={(e) => setmobileNumber(e.target.value)}
                            required
                            type="text"
                            placeholder="Mobile Number"
                            className="modal-input"
                        />
                        <input
                            value={area}
                            onChange={(e) => setarea(e.target.value)}
                            type="text"
                            placeholder="Area"
                            className="modal-input"
                        />
                        <select
                            onChange={(e) => setservice(e.target.value)}
                            value={service}
                            className="modal-input"
                        >
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

                        <button type="submit" className="submit-btn" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Box;
