import React from 'react'
import './OurServices.css'

function OurService() {
  return (
    <div>
      <div className="max-w-5xl max-md:max-w-xl mx-auto font-[sans-serif] my-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-gray-800 text-3xl font-extrabold text-center mb-6">Our Services</h2>
          <p className="text-gray-600 text-sm">Unlock a world of possibilities with our exclusive features. Explore how our unique offerings can transform your journey and empower you to achieve more.</p>
        </div>

        <div className="mt-16">
          <div className="grid md:grid-cols-2 items-center gap-16">
            <div className="animate-slide-in-left">
              <img src="https://readymadeui.com/image-1.webp" className="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" />
            </div>
            <div className="animate-slide-in-right">
              <h3 className="text-gray-800 text-xl font-bold mb-4">Service1</h3>
              <p className="text-gray-600 text-sm">Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad consequat id. Dolore et sint mollit in nisi tempor culpa consectetur. Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad consequat id.</p>
              <button type="button"
                className="px-6 py-2 mt-8 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-blue-600 bg-blue-600 hover:bg-transparent hover:text-black transition-all duration-300">
                Read More
              </button>
            </div>
            <div className="max-md:order-1 animate-slide-in-left">
              <h3 className="text-gray-800 text-xl font-bold mb-4">Service2</h3>
              <p className="text-gray-600 text-sm">Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad consequat id. Dolore et sint mollit in nisi tempor culpa consectetur. Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad consequat id.</p>
              <button type="button"
                className="px-6 py-2 mt-8 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-blue-600 bg-blue-600 hover:bg-transparent hover:text-black transition-all duration-300">
                Read More
              </button>
            </div>
            <div className="animate-slide-in-right">
              <img src="https://readymadeui.com/contact.webp" className="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurService