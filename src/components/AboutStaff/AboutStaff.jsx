import React from 'react'
import banner from '../../assets/MyServicesBanner/staffBanner.gif'
import Team from '../Team/Team'
function AboutStaff() {
  return (
    <div className='mt-11'>
     <img src={banner} alt="" />
     <Team />
    </div>
  )
}

export default AboutStaff
