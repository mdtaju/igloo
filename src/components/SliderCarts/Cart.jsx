import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Cart = ({ Icon, title, border }) => {
      return (
            <div className={`w-full h-full p-6 text-center space-y-6 ${border} border-gray-300 group`}>
                  <FontAwesomeIcon icon={Icon} className='text-4xl font-bold text-[var(--colorPrimary)] group-hover:animate-bounce' />
                  <h1 className='text-xl font-bold text-gray-800'>{title}</h1>
            </div>
      );
};

export default Cart;