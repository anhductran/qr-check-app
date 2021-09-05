import React from 'react';

import HomeHeader from 'components/HomeHeader';
import HomeFooter from '../HomeFooter';

type LayoutProps = {
  children?: any;
};

function HomeLayout({ children }: LayoutProps) {
  return (
    <div className='home-container'>
      <HomeHeader />
      {children}
      <HomeFooter />
    </div>
  );
}

export default HomeLayout;
