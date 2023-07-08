import React from 'react';
import FaceBook from "../../assets/images/facebook.svg";
import Instagram from "../../assets/images/instagram.svg";
import LinkedIn from "../../assets/images/linkedin.svg";
import Logo from '../../assets/images/logo.png';
import Twitter from "../../assets/images/twitter.svg";

const Footer = () => {
      return (
            <div className='w-full bg-[#ebf5ff]'>
                  {/* outer container */}
                  <div className='container mx-auto'>
                        {/* inner container */}
                        <div className='w-full p-4 md:p-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8'>
                              {/* logo and des area */}
                              <div className='w-full'>
                                    <div className='w-[180px] h-auto'>
                                          <img src={Logo} alt="logo" className='w-full h-auto object-contain rounded-md' />
                                    </div>
                                    <h1 className='mt-3 text-semibold'>Your Street Address <br />City, District</h1>
                                    <p className='primary_paragraph mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum vel numquam voluptatem, dolor voluptatum architecto culpa sequi amet eaque saepe.</p>
                              </div>
                              {/* how it work */}
                              <div className="w-full">
                                    <h1 className='text-xl font-bold text-gray-800 uppercase'>How It Work</h1>
                                    <ul className='mt-6 space-y-3 text-base font-medium text-gray-800'>
                                          <li className='w-fit cursor-pointer transform hover:translate-x-2 duration-200 hover:underline'>Dual Network Services</li>
                                          <li className='w-fit cursor-pointer transform hover:translate-x-2 duration-200 hover:underline'>Website Builder</li>
                                          <li className='w-fit cursor-pointer transform hover:translate-x-2 duration-200 hover:underline'>Extended Validation</li>
                                          <li className='w-fit cursor-pointer transform hover:translate-x-2 duration-200 hover:underline'>Single Domain</li>
                                          <li className='w-fit cursor-pointer transform hover:translate-x-2 duration-200 hover:underline'>Multi-Domain Management</li>
                                    </ul>
                              </div>
                              {/* important link */}
                              <div className="w-full">
                                    <h1 className='text-xl font-bold text-gray-800 uppercase'>Important Links</h1>
                                    <ul className='mt-6 space-y-3 text-base font-medium text-gray-800'>
                                          <li className='w-fit cursor-pointer transform hover:translate-x-2 duration-200 hover:underline'>Dual Network Services</li>
                                          <li className='w-fit cursor-pointer transform hover:translate-x-2 duration-200 hover:underline'>Website Builder</li>
                                          <li className='w-fit cursor-pointer transform hover:translate-x-2 duration-200 hover:underline'>Extended Validation</li>
                                          <li className='w-fit cursor-pointer transform hover:translate-x-2 duration-200 hover:underline'>Single Domain</li>
                                          <li className='w-fit cursor-pointer transform hover:translate-x-2 duration-200 hover:underline'>Multi-Domain Management</li>
                                    </ul>
                              </div>
                              {/* follow us container */}
                              <div>
                                    <h1 className='text-xl font-bold text-gray-800 uppercase'>Follow Us</h1>
                                    {/* icons outer container */}
                                    <div className='mt-6 flex items-center gap-4'>
                                          <div className='w-[42px] h-[42px] cursor-pointer p-2 bg-white border border-gray-200 rounded-full hover:scale-110 transition-all duration-200 shadow-md'>
                                                <img src={FaceBook} alt="facebook" className='w-full h-full text-gray-400' />
                                          </div>
                                          <div className='w-[42px] h-[42px] cursor-pointer p-2 bg-white border border-gray-200 rounded-full hover:scale-110 transition-all duration-200 shadow-md'>
                                                <img src={Twitter} alt="facebook" className='w-full h-full text-gray-400' />
                                          </div>
                                          <div className='w-[42px] h-[42px] cursor-pointer p-2 bg-white border border-gray-200 rounded-full hover:scale-110 transition-all duration-200 shadow-md'>
                                                <img src={Instagram} alt="facebook" className='w-full h-full text-gray-400' />
                                          </div>
                                          <div className='w-[42px] h-[42px] cursor-pointer p-2 bg-white border border-gray-200 rounded-full hover:scale-110 transition-all duration-200 shadow-md'>
                                                <img src={LinkedIn} alt="facebook" className='w-full h-full text-gray-400' />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  {/* footer bottom area */}
                  <div className='w-full p-4 md:p-6 bg-white border-t border-gray-200'>
                        <h1 className='text-sm font-bold text-gray-600 text-center'>© 2023 ·
                              Cloud Igloo Data Solutions LC
                              · All rights reserved</h1>
                  </div>
            </div>
      );
};

export default Footer;