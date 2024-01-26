import React from 'react';

import littleLemon from '../images/littlelemon.png';
import portfolio from '../images/portfolio.png';
import bookeeper from '../images/bookeeper.png';
import find from '../images/find.png';
import dashboard from '../images/dashboard.png';
import intro from '../images/intro.png';

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
          Github
        </a>
        <a href='#contact' className='btn btn__primary'>
          Contact for Demo
        </a>
      </div>
    </article>
  );
};

const Projects = () => {
  const projectList = [
    {
      title: 'Little Lemon',
      image: littleLemon,
      link: 'https://github.com/JoashVisione/front-end-dev/tree/master/little-lemon',
    },
    {
      title: 'Portfolio',
      image: portfolio,
      link: 'https://github.com/JoashVisione/front-end-dev/tree/master/react-portfolio',
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
      title: 'Intro to Figma',
      image: intro,
      link: 'https://github.com/JoashVisione/front-end-dev/tree/master/my-first-website-based-on-figma-design',
    },
    {
      itle: 'Dashboard',
      image: dashboard,
      link: 'https://github.com/JoashVisione/front-end-dev/tree/master/dashboard',
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
