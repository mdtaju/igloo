import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ServicesCart = ({ Icon, title, description, ...rest }) => {
      return (
            <div className='flex items-center justify-between gap-4 md:gap-8 p-4 rounded-b-md bg-white shadow-lg border-t-2 border-[var(--colorPrimary)] group'>
                  {/* icon container */}
                  <div className='w-fit h-fit'>
                        <div data-aos="zoom-in" {...rest} className='w-[80px] h-[80px] grid place-items-center rounded-full border border-gray-600 group-hover:bg-gray-600 transition-all duration-500'>
                              <FontAwesomeIcon icon={Icon} className='text-4xl text-gray-800 group-hover:text-gray-100 transition-all duration-200' />
                        </div>
                  </div>
                  {/* text container */}
                  <div className='space-y-6'>
                        <h1 className='primary_title text-lg'>{title}</h1>
                        <p className='primary_paragraph'>{description}</p>
                  </div>
            </div>
      );
};

export default ServicesCart;