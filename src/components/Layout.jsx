import React from 'react';
import useWindowSize from '../hooks/useWidth';
import MobileNav from './MobileNav';
import Navbar from './Navbar';

const Layout = ({ children }) => {
      const windowWidth = useWindowSize();
      return (
            <>
                  {
                        windowWidth?.width > 768 ?
                              <Navbar /> :
                              <MobileNav />
                  }
                  {children}
            </>
      );
};

export default Layout;