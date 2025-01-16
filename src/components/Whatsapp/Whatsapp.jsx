import React from 'react';
import './Whatsapp.css';
import whatsapp from '../../assets/whatsapp.webp';

function WhatsApp({ isChatbotVisible }) {
  return (
    <div>
      <a 
        href="https://wa.me/917735123124?text=" 
        target='_blank' 
        id="whatsapp-button" 
      >
        <img src={whatsapp} alt="WhatsApp" />
      </a>
    </div>
  );
}

export default WhatsApp;
