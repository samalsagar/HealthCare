import React, { useEffect, useState } from 'react';
import men from '../../assets/Review/men.png';
import female from '../../assets/Review/female.png';
import './Review.css'; // Custom styles

function Review() {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation when component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="review-section">
      <div className="my-4 font-[sans-serif] max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">What Our Happy Clients Say</h2>
          <p className="section-description">
          Our clients frequently share their appreciation for the outstanding service we provide, highlighting how our team goes above and beyond to ensure their needs are met with professionalism, efficiency, and a personal touch that truly makes a difference in their experience.
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className={`review-card ${isVisible ? 'animate-fadeIn' : ''}`}>
            <div className="review-header">
              <img src={men} className="avatar" alt="client" />
              <h4 className="client-name">
                Mr. Prasant Sasmal
                <div className="location">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>Bhubaneswar</span>
                </div>
              </h4>
            </div>
            <div className="review-body">
              <p className="review-text">
                The service was amazing. I never had to wait that long for my service. The staff was friendly and attentive.
              </p>
            </div>
          </div>

          <div className={`review-card ${isVisible ? 'animate-fadeIn' : ''}`}>
            <div className="review-header">
              <img src={men} className="avatar" alt="client" />
              <h4 className="client-name">
                Mr. Paresh Rout
                <div className="location">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>Cuttack</span>
                </div>
              </h4>
            </div>
            <div className="review-body">
              <p className="review-text">
              The service exceeded my expectations. I was impressed by how quickly I was attended to, with no long wait times. The staff were incredibly friendly and attentive throughout the entire process.
              </p>
            </div>
          </div>

          <div className={`review-card ${isVisible ? 'animate-fadeIn' : ''}`}>
            <div className="review-header">
              <img src={female} className="avatar" alt="client" />
              <h4 className="client-name">
                Ms. Swati Behera
                <div className="location">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>Rourkela</span>
                </div>
              </h4>
            </div>
            <div className="review-body">
              <p className="review-text">
              I was highly impressed with the service. There was no wait time, and everything was handled promptly. The staff were warm, welcoming, and always attentive to my needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
