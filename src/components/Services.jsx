import React from 'react';
import { BiCheck } from 'react-icons/bi';

const Service = props => {
  return (
    <article className='service'>
      <div className='head'>
        <h3>{props.title}</h3>
      </div>
      <ul className='service-list'>
        {props.serviceList.map((item, index) => (
          <li key={index}>
            <BiCheck className='icon' />
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};

const Services = () => {
  const uxUiSerivesList = [
    'Prototyping',
    'Mobile app design',
    'Web app and website design',
    'Wireframing',
    'Adobe Photoshop and Illustrator',
    'User Research',
    'Design implementation',
  ];
  const webDevServiceList = ['ReactJS', 'Flutter', 'Web app', 'Websites', 'HTML', 'CSS', 'Javascript'];
  const backendServiceList = ['PHP', 'Python', 'DJango', 'Laravel', 'RESTful APIs', 'Security', 'MySQL', 'SQL'];

  return (
    <section className='services' id='services'>
      <h5>What I offer</h5>
      <h2>My Services</h2>
      <div className='services__container'>
        <Service title='UX/UI Design' serviceList={uxUiSerivesList} />
        <Service title='Front-end Development' serviceList={webDevServiceList} />
        <Service title='Backend Development' serviceList={backendServiceList} />
      </div>
    </section>
  );
};

export default Services;
