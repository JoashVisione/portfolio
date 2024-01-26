import React from 'react';
import profile from '../images/profile.jpg';

import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { RiProjectorLine } from 'react-icons/ri';
import { TbAward, TbDownload } from 'react-icons/tb';

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
            <Item icon={TbAward} title='Experience' description='5+ years of software developemnt' />
            <Item icon={RiProjectorLine} title='Projects' description='10+ completed' />
            <Item icon={AiOutlineUsergroupAdd} title='Clients' description='100+ happy' />
          </div>
          <p>
          I'm a Full Stack Developer who is highly motivated and results-oriented with a knack for building user-friendly and scalable applications. My main focus is building robust cross-platform mobile apps and interactive web applications.
          
          </p>
          <a href='https://docs.google.com/document/d/1rzrW1kfVHYbYTWDnTUSH0AZSuj5pZ99wOJmWXWFJG_I/export?format=pdf' className='btn btn__primary' download>
            <TbDownload /> Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
