import React from 'react';
import CTA from '../components/CTA';
import HeaderSocials from '../components/HeaderSocials';

const Home = () => {
  return (
    <header>
      <div className='header_container'>
        <h4>Hello there, I am</h4>
        <h1>Joash Barasa,</h1>
        <h4>a Full Stack Developer</h4>
        <CTA />
        <div className='profile'></div>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Home;
