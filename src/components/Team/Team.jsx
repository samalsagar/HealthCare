import React from 'react';
import './Team.css';  // Import the external CSS file for styling

function Team() {
  return (
    <div className="team-container mt-10 mb-20">
      <div className="team-content font-[sans-serif]">
        <div className="team-heading max-w-2xl mx-auto text-center">
          <h2 className="team-title text-gray-800 text-4xl font-extrabold">Meet Our Team</h2>
          <p className="team-subtitle text-gray-800 text-sm mt-4 leading-relaxed">
            Meet our team of professionals who are dedicated to serving you with the best care.
          </p>
        </div>

        <div className="team-grid grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 text-center mt-16 max-w-5xl max-lg:max-w-3xl max-md:max-w-xl mx-auto">
          <div className="team-member">
            <img src="https://readymadeui.com/team-3.webp" className="team-img" alt="Simon Konecki" />
            <div className="team-details py-4">
              <h4 className="team-name text-gray-800 text-base font-bold">Simon Konecki</h4>
              <p className="team-role text-gray-800 text-xs mt-1">Nurse</p>
            </div>
          </div>

          <div className="team-member">
            <img src="https://readymadeui.com/team-4.webp" className="team-img" alt="Sophia" />
            <div className="team-details py-4">
              <h4 className="team-name text-gray-800 text-base font-bold">Sophia</h4>
              <p className="team-role text-gray-800 text-xs mt-1">Assistant Nurse</p>
            </div>
          </div>

          <div className="team-member">
            <img src="https://readymadeui.com/team-1.webp" className="team-img" alt="John Doe" />
            <div className="team-details py-4">
              <h4 className="team-name text-gray-800 text-base font-bold">John Doe</h4>
              <p className="team-role text-gray-800 text-xs mt-1">Assistant Nurse</p>
            </div>
          </div>

          <div className="team-member">
            <img src="https://readymadeui.com/team-2.webp" className="team-img" alt="Mark Adair" />
            <div className="team-details py-4">
              <h4 className="team-name text-gray-800 text-base font-bold">Mark Adair</h4>
              <p className="team-role text-gray-800 text-xs mt-1">Assistant Nurse</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
