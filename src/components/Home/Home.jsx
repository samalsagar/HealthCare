import React from 'react';
import hero from '../../assets/hero1.mp4';
import OurService from '../OurService/OurService';

function Home() {
  return (
    <>
      <div className="relative w-full h-auto try">
        {/* Optionally, you can also add a fallback for browsers that don't support the video */}

        <video
          id="heroVideo"
          className="w-full h-auto"
          src={hero}
          alt="Awesome hero page video"
          autoPlay
          muted
          loop
          playsInline

        />
      </div>
      <OurService />
    </>
  );
}

export default Home;
