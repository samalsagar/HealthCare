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
              At Home Nursing Seva, we are committed to providing top-notch, personalized medical care services right in the comfort of your home. Our team of professional nurses and healthcare providers offers a wide range of services, including pregnancy care, post-surgery care, elderly care, wound care, medication management, and palliative care. We ensure that every individual receives the highest standard of medical attention tailored to their unique needs. Whether you need assistance with daily medical tasks or support during recovery, Home Nursing Seva offers compassionate, skilled, and reliable care to help you or your loved ones live a healthier and more comfortable life at home.
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
