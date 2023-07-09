import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Logo from "../assets/images/logo.png";

const Navbar = () => {

      return (
            <div id='header' className={`w-full h-fit bg-white top-0 shadow-sm z-40`}>
                  <div className="w-full h-full px-4 flex items-center justify-between container mx-auto">
                        <div className='w-[260px] h-fit'>
                              <img src={Logo} alt="logo" className='object-contain' />
                        </div>
                        <ul className='flex items-center px-6 gap-6 text-base font-bold text-gray-600'>
                              <li className='nav_link'>Home</li>
                              <li className='nav_link group relative'>
                                    <span>Services</span> <FontAwesomeIcon icon={faCaretDown} className='group-hover:rotate-180 transition-all duration-200' />
                                    <div className='z-50 absolute bottom-[-150px] right-[50%] translate-x-[50%] bg-white py-2 shadow-md rounded-md invisible group-hover:visible group-hover:bottom-[-140px] transform transition-all duration-200'>
                                          <ul className='whitespace-nowrap'>
                                                <li className='p-2 hover:bg-gray-200'>Menu One</li>
                                                <li className='p-2 hover:bg-gray-200'>Menu Two</li>
                                                <li className='p-2 hover:bg-gray-200'>Menu Three</li>
                                          </ul>
                                    </div>
                              </li>
                              <li className='nav_link'>Cloud lgloo v2.0</li>
                              <li className='nav_link'>Support</li>
                              <li className='primary_btn'>Get Started</li>
                        </ul>
                  </div>
            </div>
      );
};

export default Navbar;