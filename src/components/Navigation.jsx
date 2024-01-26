import React from 'react';
import {useState} from 'react';
import {HiOutlineHome} from 'react-icons/hi';
import {RiServiceLine} from 'react-icons/ri';
import {CgWorkAlt} from 'react-icons/cg';
import {AiOutlineProject} from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs';
import {TbMessage} from 'react-icons/tb';

const Navigation = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <HiOutlineHome />
        <h4>Home</h4>
      </a>
      <a
        href='#about'
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}>
        <BsPerson />
        <h4>About</h4>
      </a>
      <a
        href='#experiences'
        onClick={() => setActiveNav('#experiences')}
        className={activeNav === '#experiences' ? 'active' : ''}>
        <CgWorkAlt />
        <h4>Experience</h4>
      </a>
      <a
        href='#services'
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}>
        <RiServiceLine />
        <h4>Services</h4>
      </a>
      <a
        href='#projects'
        onClick={() => setActiveNav('#projects')}
        className={activeNav === '#projects' ? 'active' : ''}>
        <AiOutlineProject />
        <h4>Projects</h4>
      </a>
      <a
        href='#contact'
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}>
        <TbMessage />
        <h4>Contact</h4>
      </a>
    </nav>
  );
};

export default Navigation;
