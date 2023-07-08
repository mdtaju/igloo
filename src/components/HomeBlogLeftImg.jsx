import React from 'react';

const HomeBlogLeftImg = ({ Img, subtitle, title, description }) => {
      return (
            <div className=''>
                  <div className='container p-4 md:p-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center rounded-md'>
                        <div
                              data-aos="fade-up"
                              className='w-full h-auto'>
                              <img src={Img} alt="" className='w-full h-auto object-contain rounded-md' />
                        </div>
                        <div
                              data-aos="fade-up"
                              data-aos-delay="200"
                              className='h-fit space-y-4'>
                              <h4 className='font-normal text-base text-gray-800'>{subtitle}</h4>
                              <h1 className='font-semibold text-4xl text-gray-800'>{title}</h1>
                              <p className='text-sm font-semibold text-gray-700'>{description}</p>
                        </div>
                  </div>
            </div>
      );
};

export default HomeBlogLeftImg;