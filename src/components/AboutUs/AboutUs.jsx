import React from 'react'
import banner from '../../assets/MyServicesBanner/Banner2.gif'
import mission_vision from '../../assets/mission_vision.jpg'
function AboutUs() {
  return (
    <div className='mt-11'>
      <img src={banner} alt="" className='w-full' />
      <div className="font-sans bg-gray-100 px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:max-w-6xl max-w-2xl mx-auto">
          <div className="text-left">
            <h2 className="text-gray-800 text-3xl font-bold mb-6">Our Commitment to Your Health</h2>
            <p className="mb-4 text-sm text-gray-500">Home Nursing Seva delivers quality home care with compassion. We bring quality health service into our patients’ homes and aim to make primary healthcare not only more accessible, but also more affordable price and suitable to our patients’ needs.</p>
            <p className="mb-4 text-sm text-gray-500">Our services span various areas of healthcare, including primary
              care, home healthcare, baby care, lab test services, pregnancy care, and more.
              All our services are tailored to meet the unique needs of each patient. </p>
            <p className="text-sm text-gray-500">We believe in a patient-centered approach that emphasizes trust,
              integrity, and collaboration. We work closely with our clients and their
              families to ensure they receive the support, guidance, and treatment they
              deserve. Whether it’s preventive care, treatment for chronic conditions,
              or post-care recovery, we are here to provide exceptional services every step of the way.</p>

          </div>
          <div>
            <img src="https://readymadeui.com/management-img.webp" alt="Placeholder Image" className="rounded-lg object-contain w-full h-full" />
          </div>
        </div>
      </div>
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
            Our Vision
          </h2>

          {/* <div className="mt-12 grid grid-cols-1   gap-8 sm:grid-cols-2 lg:grid-cols-2">

            <div className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-indigo-100 p-8 rounded-xl bg-white shadow-lg">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
              </div>
              <div className="mt-5 text-center">
                <h3 className="text-xl font-semibold text-gray-900">Mission</h3>
                <p className="mt-2 text-gray-600">We aim to make the world a better place through innovation and collaboration.</p>
              </div>
            </div>


           


            <div className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-indigo-100 p-8 rounded-xl bg-white shadow-lg">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="mt-5 text-center">
                <h3 className="text-xl font-semibold text-gray-900">Vision</h3>
                <p className="mt-2 text-gray-600">We envision a world where technology is used to solve the most pressing issues facing humanity and improve people's lives.</p>
              </div>
            </div>
          </div> */}

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission and Vision Section */}
            <div className="space-y-8">
              <div className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-indigo-100 p-8 rounded-xl bg-white shadow-lg">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                  </svg>
                </div>
                <div className="mt-5 text-center">
                  <h3 className="text-xl font-semibold text-gray-900">Mission</h3>
                  <p className="mt-2 text-gray-600">Home Nursing Seva build a team who focused to the quality of life for our patients by offering comprehensive home care, promoting independence, and ensuring the highest standards of care and solutions. Our goal is to become the best nurse service provider of choice from a baby to senior and obvious their families and We are committed to making a positive difference in the lives of those we serve.</p>
                </div>
              </div>

              <div className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-indigo-100 p-8 rounded-xl bg-white shadow-lg">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="mt-5 text-center">
                  <h3 className="text-xl font-semibold text-gray-900">Vision</h3>
                  <p className="mt-2 text-gray-600">Home Nursing Seva is to be the leading provider of home nursing services, delivering compassionate, personalized care that empowers individuals to live healthier, happier lives within the comfort of their own homes.</p>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-indigo-100 p-8 rounded-xl bg-white shadow-lg">
              <img src={mission_vision} alt="Image Description" className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>

        </div>
      </section>


    </div>
  )
}

export default AboutUs
