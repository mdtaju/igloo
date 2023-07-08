import { faCloud, faDatabase, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Cart from './Cart';

const SliderCarts = () => {
      return (
            <div className='grid grid-cols-1 md:grid-cols-3 mt-[-66px] bg-gray-50 shadow-md rounded-md w-[280px] sm:w-[600px] md:w-[800px] mx-auto'>
                  <Cart Icon={faShareNodes} title={"Share Hosting"} border="border-b md:border-r" />
                  <Cart Icon={faCloud} title={"Cloud Hosting"} border="border-b md:border-r" />
                  <Cart Icon={faDatabase} title={"Secure Database"} />
            </div>
      );
};

export default SliderCarts;