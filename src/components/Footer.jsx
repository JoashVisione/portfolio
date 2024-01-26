import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';
import logo from '../images/logo.png';

const Footer = () => {
  return (
    <footer>
      <a href='#'>
        <img src={logo} alt='Joash Logo' />
      </a>
      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experiences'>Experience</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#project'>Project</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
      <div className='footer__socials'>
        <a href='https://github.com/JoashVisione' target='_blank'>
          <FaGithub />
        </a>
        <a href='https://www.linkedin.com/in/joash-barasa-8a2b26189/' target='_blank'>
          <BsLinkedin />
        </a>
        <a href='https://visionelabs.com/' target='_blank'>
          <FiDribbble />
        </a>
      </div>
      <div className='copyright'>
        <p>&copy; Copyrright. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
