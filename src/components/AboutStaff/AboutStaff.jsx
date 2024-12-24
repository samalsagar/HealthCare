import React from 'react'
import banner from '../../assets/staffBanner2.gif'
import Team from '../Team/Team'
function AboutStaff() {
  return (
    <div className='mt-7'>
     <img src={banner} alt="" />
     <Team />
    </div>
  )
}

export default AboutStaff
