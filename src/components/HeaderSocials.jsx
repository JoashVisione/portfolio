import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
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
  );
};

export default HeaderSocials;
