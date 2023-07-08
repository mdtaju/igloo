import React from 'react';

const CustomerCart = ({ Img }) => {
      return (
            <div className='p-4 bg-[#ebf5ff] w-[200px] h-[80px] mx-auto border border-[var(--colorPrimary)] shadow-md rounded-md'>
                  <img src={Img} alt="" className='w-full h-full object-contain' />
            </div>
      );
};

export default CustomerCart;