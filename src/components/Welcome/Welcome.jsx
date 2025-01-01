import React from 'react'
import lg from '../../assets/lg2.gif'
import './Welcome.css'; // External styles for this component

function Welcome() {
  return (
    <div className='mt-10'>
      <div className="welcome-container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div className="max-md:text-center welcome-text">
            <h2 className="welcome-heading">Welcome to <br /> <span className="highlighted-text">HOME NURSING SEVA</span></h2>
            <p className="welcome-description">
            Home Nursing Seva stands as a pioneer in redefining the standards of solicitous care, setting a standard quality and reliability. We believe in taking a comprehensive approach to Home Nursing Seva in Odisha. We promise for cares of our clients not only the physical needs but also their emotional and psychological well-being. Our team of caregivers and nurses are highly trained professionals who embody the values of clients respect and emotions. Whether you require assistance with activities of daily living, skilled nursing care, we offer a comprehensive range of nursing services to your all health support needs. From short-term care to long-term care with basic conditions, we are here to provide the support you need to live life in the comfort at your home. Your choice of health care isn’t only about finding a caretaker or nurse, it’s about choosing a trustworthy partner. With our commitment and dedication to your well-being, we are here to support you every step of the way on your healthy journey.
            </p>
          </div>

          <div className="image-container">
            <img src={lg} className="image" alt="Experience" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome;
