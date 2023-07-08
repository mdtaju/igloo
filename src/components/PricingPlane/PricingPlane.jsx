import React from 'react';
import PricingCart from './PricingCart';

const PricingPlane = () => {
      return (
            <div className='my-[80px] bg-[#ebf5ff] p-4 md:p-6'>
                  {/* title and des container */}
                  <div className='space-y-4'>
                        <h1 className='primary_title text-center'>Pricing Plane</h1>
                        <p className='primary_paragraph text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, necessitatibus!</p>
                  </div>
                  {/* pricing carts outer container */}
                  <div className='w-full md:w-[950px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-12 mt-12'>
                        <PricingCart
                              data-aos-delay="100"
                              data-aos-duration="500"
                              title="BASIC"
                              price="8.00" />
                        <PricingCart
                              data-aos-delay="600"
                              data-aos-duration="500"
                              title="STANDARD"
                              price="12.99" />
                        <PricingCart
                              data-aos-delay="800"
                              data-aos-duration="500"
                              title="PREMIUM" price="16.50" />
                  </div>
            </div>
      );
};

export default PricingPlane;