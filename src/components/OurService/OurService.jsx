import React, { useState } from 'react';
import './OurServices.css';
import nurse from '../../assets/Service/nurse.jpg';
import patho from '../../assets/Service/patholab.jpg';
import deliver from '../../assets/Service/deliver.jpg';
import equipment from '../../assets/Service/equipment.jpg';
import therapist from '../../assets/Service/physiotherapy.jpg';
import transport from '../../assets/Service/transport.jpg'; 
import attendant from '../../assets/Service/attendant.jpg'; 
import ambulance from '../../assets/Service/ambulance.jpg'; 
import critical from '../../assets/Service/critical.jpg';
import senior from '../../assets/Service/citizen.jpg';
import doctor from '../../assets/Service/doctor.jpg';
function OurService() {
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      title: "Nursing Service",
      description: "We understand the importance of personalized, professional, and compassionate nursing care. Our team of experienced nurses is dedicated to providing high-quality care tailored to meet the individual needs of patients in various settings.",
      image: nurse,
    },
    {
      title: "Patholab Test",
      description: "We provide comprehensive pathology testing services designed to offer accurate and timely results. Our state-of-the-art laboratory is equipped with advanced technology, ensuring precise diagnostics for a wide range of medical conditions.",
      image: patho,
    },
    {
      title: "Medicine Delivery",
      description: "We believe that access to essential medications should be convenient and hassle-free. Our medicine delivery service is designed to bring your prescriptions and over-the-counter medications directly to your home, ensuring you never have to worry about running to the pharmacy again.",
      image: deliver,
    },
    {
      title: "Medical Equipment",
      description: "We provide a comprehensive range of medical equipment to support patients, healthcare providers, and institutions in managing health conditions with ease and efficiency. Whether you need equipment for home use, healthcare facilities, or rehabilitation, we offer high-quality, reliable products.",
      image: equipment,
    },
    {
      title: "Physiotherapy",
      description: "We offer comprehensive physiotherapy services designed to help individuals recover from injuries, manage chronic conditions, and improve overall mobility. Our skilled and compassionate physiotherapists work closely with each patient to develop personalized treatment plans aimed at reducing pain, improving strength, and enhancing flexibility.",
      image: therapist,
    },
    {
      title: "Medical Transport",
      description: "Our Medical Transport services are designed to provide safe, reliable, and efficient transportation for patients who require medical assistance during transit. Whether it's a routine appointment, emergency transportation, or a long-distance transfer, we ensure that all patients are transported with the highest level of care, comfort, and safety.",
      image: transport,
    },
    {
      title: "Home Attendant",
      description: "Our Home Attendant Services offer compassionate and professional care to individuals who need assistance with daily activities while remaining in the comfort of their own home. Whether you're recovering from surgery, managing a chronic illness, or require help with mobility and personal care, our dedicated home attendants are here to provide the support you need.",
      image: attendant,
    },
    {
      title: "Ambulance Service",
      description: "Our Ambulance Service is committed to providing fast, reliable, and professional emergency medical transportation. Whether it's a critical emergency or a non-emergency medical transfer, our fully equipped ambulances and highly trained medical staff are here to ensure you or your loved ones receive the care needed during transport.",
      image: ambulance,
    },

    {
      title: "Critical Care",
      description: "Critical Care is a specialized area of healthcare designed to provide intensive treatment for patients facing life-threatening conditions. Our Critical Care service focuses on monitoring, diagnosing, and treating critically ill patients with acute medical conditions such as organ failure, severe injuries, and complications from surgery.",
      image: critical,
    },
    {
      title: "Senior Citizen",
      description: "As our loved ones age, their needs change, and providing them with the right care and support is essential. Our Senior Citizen Care service is designed to offer compassionate, professional, and personalized assistance to seniors who need help with daily activities, medical care, and emotional support.",
      image: senior,
    },
    {
      title: "Doctor Consultation",
      description: "Our Doctor Consultation service is designed to provide accessible and reliable healthcare advice, diagnosis, and treatment to patients in the comfort of their homes or at a convenient location. We understand that timely medical consultations are vital to maintaining good health and addressing any medical concerns, which is why we offer professional and compassionate consultations with experienced doctors.",
      image: doctor,
    },

    
  ];

  const visibleServices = showAll ? services : services.slice(0, 6);

  return (
    <div className="our-services-container">
      <div className="our-services-header">
        <h2 className="services-title">Our Services</h2>
        <p className="services-description">We provide a range of innovative healthcare solutions designed to improve patient outcomes, streamline medical operations, and enhance the overall healthcare experience. Our services are tailored to meet the unique needs of healthcare providers, patients, and institutions, with a strong focus on quality, efficiency, and care.</p>
      </div>

      <div className="our-services-grid">
        {visibleServices.map((service, index) => (
          <div key={index} className="service-item">
            <img src={service.image} alt={service.title} className="service-image" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <button className="service-read-more-btn">Read More</button>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="service-toggle-btn">
          {showAll ? 'See Less' : 'See All Services'}
        </button>
      </div>
    </div>
  );
}

export default OurService;
