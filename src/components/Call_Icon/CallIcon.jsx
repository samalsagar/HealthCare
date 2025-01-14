import React from 'react';
import { Link } from 'react-router-dom';

function CallIcon() {
  return (
    <div className="fixed bottom-20 left-6 flex items-center space-x-2">
      <Link
        to="tel:+919348228808" // Use the 'tel:' URI scheme to open the dialer
        className="bg-blue-400  p-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
      >
        <span className="text-xl">📞</span>
      </Link>
      <span className="text-black font-semibold">Call Now</span>
    </div>
  );
}

export default CallIcon;
