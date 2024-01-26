import React from 'react';
import profile from '../images/profile.jpg';

import {TbAward} from 'react-icons/tb';
import {RiProjectorLine} from 'react-icons/ri';
import {AiOutlineUsergroupAdd} from 'react-icons/ai';
import {TbDownload} from 'react-icons/tb';

const Item = props => {
  return (
    <article className='about__item'>
      <props.icon className='icon' />
      <h5>{props.title}</h5>
      <small className='txt-light'>{props.description}</small>
    </article>
  );
};

const About = () => {
  return (
    <section className='about' id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className='container__about'>
        <div className='me'>
          <img src={profile} alt='About photo' />
        </div>
        <div className='about__me'>
          <div className='items'>
            <Item icon={TbAward} title='Experience' description='2+ years of developemnt' />
            <Item icon={RiProjectorLine} title='Projects' description='15+ completed' />
            <Item icon={AiOutlineUsergroupAdd} title='Clients' description='100+ happy' />
          </div>
          <p>
            I'm a professional Front-end engineer dedicated to delivering the best services to my
            clients in time while meeting all the project specifications.
          </p>
          <a href='' className='btn btn__primary' download>
            <TbDownload /> Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
