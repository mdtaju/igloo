import React from 'react';

const PricingCart = ({ title, price, ...rest }) => {
      return (
            <div data-aos="flip-left" {...rest} className='shadow-lg bg-white rounded-md border border-gray-200 hover:scale-105 transition-all duration-200'>
                  <div className='bg-gray-100 p-4'>
                        <h1 className='text-2xl font-bold text-[var(--colorPrimary)] text-center'>{title}</h1>
                  </div>
                  <div className='p-4'>
                        <ul className='text-center text-base font-medium text-gray-600 space-y-4 mb-4'>
                              <li>24 GB Storage</li>
                              <li>Unlimited products</li>
                              <li>24/7 Support</li>
                              <li>Discount code engine</li>
                              <li>All OS Supported</li>
                              <li>Snyc Multiple Device</li>
                        </ul>
                        <p className='text-center font-bold text-gray-600'>$<span className='text-2xl text-gray-800'>{price}</span>/month</p>
                  </div>
                  <div className='bg-gray-100 p-4 text-center'>
                        <button className='primary_btn_light border-[var(--colorPrimary)] text-[var(--colorPrimary)] hover:primary_btn transition-all duration-200'>BUY NOW</button>
                  </div>
            </div>
      );
};

export default PricingCart;