import React, { useState,useEffect } from 'react';
import './Header.css';

import logo from '../../assets/logo.jpg';
import Modal from '../Modal/Modal'; 
import { Link } from 'react-router-dom';
import importFiles from '../importFiles';
function Header() {
    const [menuOpen, setMenuOpen] = useState(false);  // State to track menu visibility
    const [aboutOpen, setAboutOpen] = useState(false); // State to track About submenu visibility
    const [servicesOpen, setServicesOpen] = useState(false); // State to track Services submenu visibility
    const [modalOpen, setModalOpen] = useState(false); 

    // Toggle the menu visibility
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Toggle About submenu visibility
    const toggleAbout = (event) => {
        event.preventDefault();  // Prevent the page from refreshing
        setAboutOpen(!aboutOpen);
    };

    // Toggle Services submenu visibility
    const toggleServices = (event) => {
        event.preventDefault();  // Prevent the page from refreshing
        setServicesOpen(!servicesOpen);
    };

    const closeMenuAndNavigate = () => {
        setMenuOpen(false); // Close the menu
    };

     // Open the modal on component mount
     useEffect(() => {
        setModalOpen(true); // Open the modal when the component is mounted
    }, []);

    // Close modal function
    const closeModal = () => {
        setModalOpen(false);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0 });
    };

    return (
        <div className=''>
            <header className='font-[sans-serif] min-h-[60px] tracking-wide relative z-50'>
                <section className='flex border-b bg-white font-sans min-h-[70px] tracking-wide relative z-50 sticky-header'>
                    <div className='flex flex-wrap items-center justify-between sm:px-10 px-4 py-3 gap-4 w-full max-w-screen-xl mx-auto'>
                        <Link to="/"><img src={logo} alt="logo" className='h-20 w-24' /></Link>

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
                            className={`lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 ${menuOpen ? 'max-lg:block' : 'max-lg:hidden'}`}
                        >
                            <ul className='lg:flex lg:gap-x-10 max-lg:space-y-3 text-left'>
                                <li className='max-lg:border-b max-lg:py-3'>
                                    <Link to='/' 
                                    // onClick={closeMenuAndNavigate}
                                    onClick={() => {
                                                closeMenuAndNavigate();
                                                scrollToTop();
                                              }} 
                                    className='hover:text-blue-600 text-[15px] font-bold block text-gray-600'>Home</Link>
                                </li>

                                {/* About Menu item */}
                                <li className='group relative max-lg:border-b max-lg:py-3'>
                                    <Link
                                        href='#' // Prevent default behavior
                                        className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold lg:hover:fill-[#007bff] block'
                                        onClick={toggleAbout} // Toggle visibility of the "About" menu
                                    >
                                        About
                                    </Link>
                                    <ul
                                        className={`absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500 ${aboutOpen ? 'max-lg:block' : 'max-lg:hidden'}`}
                                    >
                                        <li className='border-b py-2 flex items-center'>
                                            <i className="fas fa-bed h-5 w-5 text-gray-600 mr-2"></i>
                                            <img src={importFiles.aboutus} alt="" className='h-5 me-2' />
                                            <Link to="aboutus" 
                                            // onClick={closeMenuAndNavigate}
                                            onClick={() => {
                                                closeMenuAndNavigate();
                                                scrollToTop();
                                              }} 
                                            className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>About Us</Link>
                                        </li>
                                        <li className='border-b py-2 flex items-center'>
                                            <i className="fas fa-vial h-5 w-5 text-gray-600 mr-2"></i>
                                            <img src={importFiles.staff} alt="" className='h-5 me-2' />
                                            <Link to="staff" 
                                            // onClick={closeMenuAndNavigate}
                                            onClick={() => {
                                                closeMenuAndNavigate();
                                                scrollToTop();
                                              }} 
                                            className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>About Our Staff</Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* Services Menu item */}
                                <li className='group relative text-left max-lg:border-b max-lg:py-3'>
                                    <Link
                                        href='#' // Prevent default behavior
                                        className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold lg:hover:fill-[#007bff] block'
                                        onClick={toggleServices} // Toggle visibility of the "Services" menu
                                    >
                                        Services
                                    </Link>
                                    <ul
                                        className={`absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500 ${servicesOpen ? 'max-lg:block' : 'max-lg:hidden'}`}
                                    >
                                        <li className='border-b py-2 flex items-center'>
                                            <i className="fas fa-bed h-5 w-5 text-gray-600 mr-2"></i>
                                            <img src={importFiles.nurse} alt="" className='h-5 me-2' />
                                            <Link to="nurse" 
                                            // onClick={closeMenuAndNavigate}
                                            onClick={() => {
                                                closeMenuAndNavigate();
                                                scrollToTop();
                                              }} 
                                            className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Nursing Services</Link>
                                        </li>
                                        
                                        <li className='border-b py-2 flex items-center'>
                                            <i className="fas fa-bed h-5 w-5 text-gray-600 mr-2"></i>
                                            <img src={importFiles.attendant} alt="" className='h-5 me-2' />
                                            <Link to="homeattendant" 
                                            // onClick={closeMenuAndNavigate}
                                            onClick={() => {
                                                closeMenuAndNavigate();
                                                scrollToTop();
                                              }} 
                                            className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Home Attendant</Link>
                                        </li>

                                        <li className='border-b py-2 flex items-center'>
                                            <i className="fas fa-bed h-5 w-5 text-gray-600 mr-2"></i>
                                            <img src={importFiles.bed} alt="" className='h-5 me-2' />
                                            <Link to="bedside" 
                                            // onClick={closeMenuAndNavigate}
                                            onClick={() => {
                                                closeMenuAndNavigate();
                                                scrollToTop();
                                              }} 
                                            className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Bedside Attendant</Link>
                                        </li>

                                        <li className='border-b py-2 flex items-center'>
                                            <i className="fas fa-bed h-5 w-5 text-gray-600 mr-2"></i>
                                            <img src={importFiles.medical} alt="" className='h-5 me-2' />
                                            <Link to="medicalattendant" 
                                            // onClick={closeMenuAndNavigate}
                                            onClick={() => {
                                                closeMenuAndNavigate();
                                                scrollToTop();
                                              }} 
                                            className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Medical Attendant</Link>
                                        </li>

                                        <li className='border-b py-2 flex items-center'>
                                            <i className="fas fa-bed h-5 w-5 text-gray-600 mr-2"></i>
                                            <img src={importFiles.seniorcitizen} alt="" className='h-5 me-2' />
                                            <Link to="siniorcare" 
                                            // onClick={closeMenuAndNavigate}
                                            onClick={() => {
                                                closeMenuAndNavigate();
                                                scrollToTop();
                                              }} 
                                            className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Senior Citizen Care</Link>
                                        </li>

                                        <li className='border-b py-2 flex items-center'>
                                            <i className="fas fa-bed h-5 w-5 text-gray-600 mr-2"></i>
                                            <img src={importFiles.preg} alt="" className='h-5 me-2' />
                                            <Link to="pregnancycare" 
                                            // onClick={closeMenuAndNavigate}
                                            onClick={() => {
                                                closeMenuAndNavigate();
                                                scrollToTop();
                                              }} 
                                            className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Pregnancy Care</Link>
                                        </li>


                                        
                                        <li className='border-b py-2 flex items-center'>
                                            <i className="fas fa-bed h-5 w-5 text-gray-600 mr-2"></i>
                                            <img src={importFiles.baby} alt="" className='h-5 me-2' />
                                            <Link to="babycare" 
                                            // onClick={closeMenuAndNavigate}
                                            onClick={() => {
                                                closeMenuAndNavigate();
                                                scrollToTop();
                                              }} 
                                            className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Baby Care</Link>
                                        </li>

                                        <li className='border-b py-2 flex items-center'>
                                            <i className="fas fa-bed h-5 w-5 text-gray-600 mr-2"></i>
                                            <img src={importFiles.criticalcare} alt="" className='h-5 me-2' />
                                            <Link to="criticalcare" 
                                            // onClick={closeMenuAndNavigate}
                                            onClick={() => {
                                                closeMenuAndNavigate();
                                                scrollToTop();
                                              }} 
                                            className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Critical Care</Link>
                                        </li>

                                        

                                        <li className='border-b py-2 flex items-center'>
                                            <i className="fas fa-bed h-5 w-5 text-gray-600 mr-2"></i>
                                            <img src={importFiles.patholab} alt="" className='h-5 me-2' />
                                            <Link to="patholab" 
                                            // onClick={closeMenuAndNavigate}
                                            onClick={() => {
                                                closeMenuAndNavigate();
                                                scrollToTop();
                                              }} 
                                            className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Patholab Test </Link>
                                        </li>

                                        <li className='border-b py-2 flex items-center'>
                                            <i className="fas fa-bed h-5 w-5 text-gray-600 mr-2"></i>
                                            <img src={importFiles.therapy} alt="" className='h-5 me-2' />
                                            <Link to="physiotherapy" 
                                            // onClick={closeMenuAndNavigate}
                                            onClick={() => {
                                                closeMenuAndNavigate();
                                                scrollToTop();
                                              }} 
                                            className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Physiotherapy</Link>
                                        </li>

                                        

                                        <li className='border-b py-2 flex items-center'>
                                            <i className="fas fa-bed h-5 w-5 text-gray-600 mr-2"></i>
                                            <img src={importFiles.doctor} alt="" className='h-5 me-2' />
                                            <Link to="doctor" 
                                            // onClick={closeMenuAndNavigate}
                                            onClick={() => {
                                                closeMenuAndNavigate();
                                                scrollToTop();
                                              }} 
                                            className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Doctor Consultation </Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* Other menu items */}
                                <li className='max-lg:border-b max-lg:py-3'>
                                    <Link to='gallery' 
                                    // onClick={closeMenuAndNavigate}
                                    onClick={() => {
                                        closeMenuAndNavigate();
                                        scrollToTop();
                                      }} 
                                    className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Gallery</Link>
                                </li>
                                {/* <li className='max-lg:border-b max-lg:py-3'>
                                    <Link href='' className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Member Registration</Link>
                                </li> */}
                                <li className='max-lg:border-b max-lg:py-3'>
                                    <Link to='carrer' 
                                     onClick={() => {
                                        closeMenuAndNavigate();
                                        scrollToTop();
                                      }} 
                                    className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Career</Link>
                                </li>
                                <li className='max-lg:border-b max-lg:py-3'>
                                    <Link to='enquiry' 
                                    onClick={() => {
                                        closeMenuAndNavigate();
                                        scrollToTop();
                                      }} 
                                    className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Enquiry Now</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <Modal isOpen={modalOpen} onClose={closeModal} />
            </header>
        </div>
    );
}

export default Header;