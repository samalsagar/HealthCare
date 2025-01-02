import React from 'react'
// import banner from '../../../assets/MyServicesBanner/pathoLabBanner.gif'
import importFiles from '../../importFiles'
import ServiceListBox from '../../ServiceListBox/ServiceListBox'
function PathoLabService() {
  return (
    <div className='mt-11'>
      {/* <img src={banner} alt="" /> */}
      <img src={importFiles.commingsoon} alt="comming soon" className='w-full' />
      <div className="mt-10">
        <ServiceListBox />
      </div>
    </div>
  )
}

export default PathoLabService
