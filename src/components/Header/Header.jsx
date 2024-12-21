import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/hospitalLogo.png';
import nurse from '../../assets/nurse.png';
import aboutsus from '../../assets/aboutus.png';
import staff from '../../assets/staff.png';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);  // State to track menu visibility

    // Toggle the menu visibility
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <header className='font-[sans-serif] min-h-[60px] tracking-wide relative z-50'>
                <section className="hidden lg:flex bg-[#004d66] min-h-[40px] px-4 py-2 sm:px-10 items-center">
                    <button type="button" className="text-white text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#fff" className="mr-3 inline-block"
                            viewBox="0 0 482.6 482.6">
                            <path
                                d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                                data-original="#000000"></path>
                        </svg>
                        +180-548-2588
                    </button>

                    <span className="border-l h-3 mx-6"></span>

                    <button type="button" className="text-white text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#fff" className="mr-3 inline-block"
                            viewBox="0 0 479.058 479.058">
                            <path
                                d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                data-original="#000000"></path>
                        </svg>
                        info@example.com
                    </button>

                    <span className="border-l h-3 mx-6"></span>

                    <button type="button" className="text-white text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#fff" className="mr-3 inline-block"
                            viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 4 7 11 7 11s7-7 7-11c0-3.87-3.13-7-7-7zm0 10c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path>
                        </svg>
                        1234 Test Address, Test Address
                    </button>
                </section>


                <section className='flex border-b bg-white font-sans min-h-[70px] tracking-wide relative z-50 sticky-header'>
                    <div className='flex flex-wrap items-center justify-between sm:px-10 px-4 py-3 gap-4 w-full max-w-screen-xl mx-auto'>
                        <a href=""><img src={logo} alt="logo" className='w-44 h-16' /></a>

                        {/* Mobile Menu Toggle Button */}
                        <button
                            id="toggleOpen"
                            className='lg:hidden'
                            onClick={toggleMenu}  // Trigger toggleMenu on click
                        >
                            <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </button>

                        {/* Mobile Menu */}
                        <div
                            id="collapseMenu"
                            className={`lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 ${menuOpen ? 'max-lg:block' : 'max-lg:hidden'}`}  // Add classNamees to show or hide based on state
                        >
                            <ul className='lg:flex lg:gap-x-10 max-lg:space-y-3'>
                                {/* Your menu items */}
                                <li className='max-lg:border-b max-lg:py-3'><a href='' className='hover:text-blue-600 text-[15px] font-bold text-blue-600 block'>Home</a></li>


                                <li className='group relative'>
                                    <a href='' className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold lg:hover:fill-[#007bff] block'>About</a>
                                    <ul className='absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                                        <li className='border-b py-2 flex items-center'>
                                            <i className="fas fa-bed h-5 w-5 text-gray-600 mr-2"></i><img src={aboutsus} alt="" className='h-5 me-2' />
                                            <a href='' className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>About Us</a>
                                        </li>
                                        <li className='border-b py-2 flex items-center'>
                                            <i className="fas fa-vial h-5 w-5 text-gray-600 mr-2"></i> <img src={staff} alt="" className='h-5 me-2' />
                                            <a href='' className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Our Staff Test</a>
                                        </li>
                                    </ul>


                                </li>


                                <li className='group relative'>
                                    <a href='' className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold lg:hover:fill-[#007bff] block'>Services</a>
                                    <ul className='absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                                        <li className='border-b py-2 flex items-center'>
                                            <i className="fas fa-bed h-5 w-5 text-gray-600 mr-2"></i><img src={nurse} alt="" className='h-5 me-2' />
                                            <a href='' className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Nursing Services</a>
                                        </li>
                                        <li className='border-b py-2 flex items-center'>
                                            <i className="fas fa-vial h-5 w-5 text-gray-600 mr-2"></i> {/* Patholab Test icon */}
                                            <a href='' className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Patholab Test</a>
                                        </li>
                                        <li className='border-b py-2 flex items-center'>
                                            <i className="fas fa-truck h-5 w-5 text-gray-600 mr-2"></i> {/* Medicine Delivery icon */}
                                            <a href='' className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Medicine Delivery</a>
                                        </li>
                                        <li className='border-b py-2 flex items-center'>
                                            <i className="fas fa-cogs h-5 w-5 text-gray-600 mr-2"></i> {/* Medical Equipment icon */}
                                            <a href='' className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Medical Equipment</a>
                                        </li>
                                        <li className='border-b py-2 flex items-center'>
                                            <i className="fas fa-hand-holding-medical h-5 w-5 text-gray-600 mr-2"></i> {/* Physiotherapy icon */}
                                            <a href='' className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Physiotherapy</a>
                                        </li>
                                        <li className='border-b py-2 flex items-center'>
                                            <i className="fas fa-truck-medical h-5 w-5 text-gray-600 mr-2"></i> {/* Medical Transport icon */}
                                            <a href='' className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Medical Transport</a>
                                        </li>
                                        <li className='border-b py-2 flex items-center'>
                                            <i className="fas fa-user h-5 w-5 text-gray-600 mr-2"></i> {/* Home Attendant icon */}
                                            <a href='' className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Home Attendant</a>
                                        </li>
                                        <li className='border-b py-2 flex items-center'>
                                            <i className="fas fa-ambulance h-5 w-5 text-gray-600 mr-2"></i> {/* Ambulance Service icon */}
                                            <a href='' className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Ambulance Service</a>
                                        </li>
                                        <li className='border-b py-2 flex items-center'>
                                            <i className="fas fa-heartbeat h-5 w-5 text-gray-600 mr-2"></i> {/* Critical Care icon */}
                                            <a href='' className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Critical Care</a>
                                        </li>
                                        <li className='border-b py-2 flex items-center'>
                                            <i className="fas fa-users h-5 w-5 text-gray-600 mr-2"></i> {/* Senior Citizen icon */}
                                            <a href='' className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Senior Citizen</a>
                                        </li>
                                        <li className='border-b py-2 flex items-center'>
                                            <i className="fas fa-phone h-5 w-5 text-gray-600 mr-2"></i> {/* Doctor Consultation icon */}
                                            <a href='' className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Doctor Consultation</a>
                                        </li>
                                    </ul>


                                </li>
                                <li className='max-lg:border-b max-lg:py-3'><a href='' className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Gallery</a></li>
                                <li className='max-lg:border-b max-lg:py-3'><a href='' className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Member Registration</a></li>
                                <li className='max-lg:border-b max-lg:py-3'><a href='' className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Career</a></li>
                                <li className='max-lg:border-b max-lg:py-3'><a href='' className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Enquiry Now</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </header>
        </div>
    );
}

export default Header;
