import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const UpNavigateBtn = () => {

      const handleClickToTop = () => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
      return (
            <div id='upNavigate' className='fixed bottom-[20px] right-[20px] sm:bottom-[70px] sm:right-[50px] z-[10] invisible transform transition-all duration-100'>
                  <div onClick={handleClickToTop} className='grid place-items-center w-[42px] h-[42px] rounded-full bg-white border border-[var(--colorPrimary)] shadow-lg cursor-pointer active:scale-90 transition-all duration-200'>
                        <FontAwesomeIcon icon={faAngleUp} />
                  </div>
            </div>
      );
};

export default UpNavigateBtn;