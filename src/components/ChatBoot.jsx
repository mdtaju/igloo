import { faComment, faPaperPlane, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const ChatBoot = () => {
      const [chatShow, setChatShow] = useState(false);

      return (
            <div className='fixed left-0 top-[50%] translate-y-[-50%] z-50'>
                  {
                        !chatShow ?
                              <div onClick={() => setChatShow(true)} className='w-[40px] h-[40px] bg-[var(--colorPrimary)] shadow-lg rounded-r-md grid place-items-center cursor-pointer'>
                                    <FontAwesomeIcon icon={faComment} className='hover:animate-pulse text-lg text-white' />
                              </div> :
                              <div className='w-[300px] h-screen sm:h-[400px] bg-white shadow-lg rounded-r-md border border-gray-300 flex flex-col justify-between'>
                                    <div className='bg-[#ebf5ff] flex items-center justify-between w-full p-4 border-b border-gray-300'>
                                          <p className='text-[var(--colorPrimary)] font-bold text-base'>Chat Boot</p>
                                          <button onClick={() => setChatShow(false)} className='w-[32px] h-[32px] rounded-full border border-[var(--colorPrimary)] text-[var(--colorPrimary)]'>
                                                <FontAwesomeIcon icon={faXmark} className='' />
                                          </button>
                                    </div>
                                    <div>
                                          <h1 className='text-center text-gray-800 font-semibold'>Hey I'm IGLOO Robot <br />Start Chat With Me</h1>
                                    </div>
                                    <div className='w-full mt-4'>
                                          <div className='p-4 border-t border-gray-300 bg-[#ebf5ff]'>
                                                <div className='w-full py-2 px-4 rounded-full border border-gray-400 flex items-center justify-between'>
                                                      <input type="text" className='border-none outline-none text-gray-600 bg-transparent' placeholder='Type your message' />
                                                      <FontAwesomeIcon icon={faPaperPlane} className='text-[var(--colorPrimary)] cursor-pointer' />
                                                </div>
                                          </div>
                                    </div>
                              </div>
                  }
            </div>
      );
};

export default ChatBoot;