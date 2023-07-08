import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Logo from "../assets/images/logo.png";

const MobileNav = () => {
      const [dialogOpen, setDialogOpen] = useState(false);

      // on click menu open
      const handleMenuOpen = () => {
            setDialogOpen(true);
      }

      // on click menu close
      const handleMenuClose = () => {
            setDialogOpen(false);
      }
      return (
            <>
                  {
                        !dialogOpen ?
                              // menu header container
                              <div id='header' className='w-full py-4 px-3 h-fit flex items-center justify-between bg-white z-50'>
                                    <div className='w-[180px] h-fit'>
                                          <img src={Logo} alt="logo" className='object-contain' />
                                    </div>
                                    <div onClick={handleMenuOpen} className='p-3'>
                                          <FontAwesomeIcon className='text-xl font-bold text-gray-800' icon={faBars} />
                                    </div>
                              </div> :
                              // menu body container
                              <div className='w-screen h-screen fixed z-50 bg-white grid items-center'>
                                    <ul className='text-center space-y-2'>
                                          <li onClick={handleMenuClose} className='w-[40px] h-[40px] border border-gray-800 rounded-full grid place-items-center mx-auto'>
                                                <FontAwesomeIcon className='text-2xl font-bold text-gray-800' icon={faXmark} />
                                          </li>
                                          <li className='nav_link_mobile'>Home</li>
                                          <li className='nav_link_mobile'>Services</li>
                                          <li className='nav_link_mobile'>Cloud lgloo v2.0</li>
                                          <li className='nav_link_mobile'>Support</li>
                                          <li className='nav_link_mobile'>Get Started</li>
                                    </ul>
                              </div>
                  }
            </>
      );
};

export default MobileNav;