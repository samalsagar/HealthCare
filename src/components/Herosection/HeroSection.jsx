import React from 'react'
import hero1 from '../../assets/healthcareHero1.gif'
import hero2 from '../../assets/healthcareHero2.gif'
import hero3 from '../../assets/healthcareHero3.gif'
// import hero4 from '../../assets/healthcareHero4.gif'

function HeroSection() {
  return (
    <div>
      <img src={hero1}  alt="herosection" className='h-full w-full' />
    </div>
  )
}

export default HeroSection
