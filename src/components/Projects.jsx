import React from 'react';

import bookeeper from '../images/bookeeper.png';
import cbc from '../images/cbc.png';
import cff from '../images/cff.png';
import dashboard from '../images/dashboard.png';
import find from '../images/find.png';
import intro from '../images/intro.png';
import littleLemon from '../images/littlelemon.png';
import portfolio from '../images/portfolio.png';

// Destructure props into 'project' object
const Project = ({project}) => {
  return (
    <article className='project'>
      <div className='image'>
        <img src={project.image} alt={`Project ${project.title}`} />
      </div>
      <h3>{project.title}</h3>
      <div className='cta'>
        {/* add links to projectList array(github and or live demo) */}
        <a href={project.link} className='btn' target='_blank'>
          Live/Demo
        </a>
        <a href='#contact' className='btn btn__primary'>
          Contact
        </a>
      </div>
    </article>
  );
};

const Projects = () => {
  const projectList = [
    {
      title: 'CBC Grade 1-6 Revision App',
      image: cbc,
      link: 'https://github.com/JoashVisione/front-end-dev/tree/master/little-lemon',
    },
    {
      title: 'Chicken Feed Formulator App',
      image: cff,
      link: 'https://github.com/JoashVisione/front-end-dev/tree/master/little-lemon',
    },
    {
      title: 'Portfolio',
      image: portfolio,
      link: 'https://joashvisione.github.io/portfolio',
    },
    {
      itle: 'Dashboard',
      image: dashboard,
      link: 'https://joashvisione.github.io/admin-dashboard',
    },
    {
      title: 'Bookeeper',
      image: bookeeper,
      link: 'https://github.com/JoashVisione/front-end-dev/tree/master/book-keeper',
    },
    {
      title: 'Find',
      image: find,
      link: 'https://github.com/JoashVisione/front-end-dev/tree/master/web-one-from-design',
    },
    {
      title: 'Little Lemon',
      image: littleLemon,
      link: 'https://github.com/JoashVisione/front-end-dev/tree/master/little-lemon',
    },
    {
      title: 'Intro to Figma and web design',
      image: intro,
      link: 'https://github.com/JoashVisione/front-end-dev/tree/master/my-first-website-based-on-figma-design',
    },
  ];

  return (
    <section className='projects' id='projects'>
      <h5>Previous work</h5>
      <h2>My Projects</h2>
      <div className='container'>
        {projectList.map((project, index) => (
          <Project project={project} key={index.toString()} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
