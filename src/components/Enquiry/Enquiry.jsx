import React from 'react'
import banner from '../../assets/MyServicesBanner/enquiryBanner.gif'
import image from '../../assets/contactUs.png'
import { useState } from 'react'
import axios from 'axios'; 
import Swal from 'sweetalert2';
function Enquiry() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("jksdhfk")
        console.log(name, email, number, message);
        const data = {
            Name: name,
            Email: email,
            Number: number,
            Message: message
        }

        axios.post('https://api.sheetbest.com/sheets/e9d0cec2-8231-40f9-8d25-0333c900b4fd', data).then((response) => {
            console.log(response);
            Swal.fire('We Appreciate Your Inquiry', "Will get back to you soon", 'success');
            setName('')
            setEmail('')
            setNumber('')
            setMessage('')
        })

    }

    return (
        <div className=''>
            <img src={banner} alt=""  className=''/>
            <div className="text-center pt-10 mb-20">
                <h2 className="text-3xl font-extrabold text-gray-800 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-yellow-400 after:rounded-full">
                    Contact Us
                </h2>
                <p className="text-md text-gray-800 mt-6 leading-relaxed ps-20 pe-20">
                    "We'd love to hear from you! Feel free to reach out through
                    any of the following methods, and we'll get back to you as soon as possible."
                </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-12 px-8 sm:px-16 z-10 relative">
                {/* Left Side: Contact Form */}


                {/* Right Side: Image */}
                <div

                    className="relative lg:col-span-2 flex justify-center items-center"

                >
                    <img
                        // src="https://readymadeui.com/images/analtsis.webp"
                        src={image}
                        alt="Contact"
                        className="w-3/4 mx-auto rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
                    />
                </div>

                <div

                    className="max-w-lg mx-auto text-center"

                >
                    <h3 className="text-4xl font-semibold text-gray-800 mb-6">Let’s Get In Touch!</h3>
                    <p className="text-gray-600 mb-6">We’re excited to hear from you. Please fill out the form below, and we’ll get back to you shortly.</p>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <input
                             required
                            value={name}
                            onChange={(e)=> setName(e.target.value)}
                            type="text"
                            placeholder="Your Name"
                            className="w-full h-14 px-6 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-all duration-300 shadow-sm hover:shadow-lg"

                        />
                        <input
                            required
                            type="email"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            placeholder="Your Email"
                            className="w-full h-14 px-6 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-all duration-300 shadow-sm hover:shadow-lg"

                        />
                        <input
                            required
                            value={number}
                            onChange={(e)=> setNumber(e.target.value)}
                            type="number"
                            placeholder="Phone Number"
                            className="w-full h-14 px-6 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-all duration-300 shadow-sm hover:shadow-lg"

                        />

                        {/* <input
                            type="text"
                            placeholder="Subject"
                            className="w-full h-14 px-6 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-all duration-300 shadow-sm hover:shadow-lg"

                        /> */}

                        <textarea
                            required
                            value={message}
                            onChange={(e)=> setMessage(e.target.value)}
                            placeholder="Your Message"
                            rows="4"
                            className="w-full px-6 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-all duration-300 shadow-sm hover:shadow-lg"

                        ></textarea>
                        <button
                            type="submit"
                            className="w-full py-3 text-white bg-gradient-to-r from-blue-400 to-yellow-500 rounded-lg text-lg font-semibold transform hover:scale-105 transition-all duration-300"

                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Enquiry
