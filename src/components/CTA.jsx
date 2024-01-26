import React from 'react';

const CTA = () => {
  return (
    <div className='cta'>
      <a href='https://docs.google.com/document/d/1rzrW1kfVHYbYTWDnTUSH0AZSuj5pZ99wOJmWXWFJG_I/export?format=pdf' className='btn' download>
        Download CV
      </a>
      <a href='#contact' className='btn btn__primary'>
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
