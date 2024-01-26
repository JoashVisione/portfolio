import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';

const Skill = props => {
  return (
    <article>
      <BsPatchCheckFill className='icon' />
      <div>
        <h4>{props.title}</h4>
        <small className='txt-light'>{props.level}</small>
      </div>
    </article>
  );
};

const Experiences = () => {
  return (
    <section className='experiences' id='experiences'>
      <h5>My Skills</h5>
      <h2>My Experience</h2>
      <div className='experience'>
        <h3>Front-end Developemnt</h3>
        <div className='experience__details'>
          <Skill title='HTML' level='Experienced' />
          <Skill title='CSS' level='Experienced' />
          <Skill title='Javascript' level='Experienced' />
          <Skill title='SASS' level='Intermediate' />
          <Skill title='Bootstrap' level='Experienced' />
          <Skill title='React' level='Intermediate' />
          <Skill title='Flutter' level='Experienced' />
          <Skill title='Kotlin' level='Intermediate' />
          <Skill title='Figma' level='Experienced' />
          <Skill title='UI/UX Design' level='Intermediate' />
        </div>
      </div>
      <div className='experience'>
        <h3>Backend Developemnt</h3>
        <div className='experience__details'>
          <Skill title='PHP' level='Experienced' />
          <Skill title='RESTful APIs' level='Experienced' />
          <Skill title='Python' level='Experienced' />
          <Skill title='DJango' level='Intermediate' />
          <Skill title='Laravel' level='Experienced' />
          <Skill title='MySQL' level='Intermediate' />
          <Skill title='SQL' level='Experienced' />
          <Skill title='Security' level='Intermediate' />
        </div>
      </div>
    </section>
  );
};

export default Experiences;
