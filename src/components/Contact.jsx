import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { SiWhatsapp } from 'react-icons/si';

// emailjs
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();
  //sending email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('react-portfolio', 'template_xioz13y', form.current, '1Qljg5Bvp7vpBn3Pg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      //clear fields
      e.target.reset();
  };


  return (
    <section className='contact' id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className='container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>khaem*****@gmail.com</h5>
            <a href='mailto:khaembajoash1@gmail.com' target='_blank'>
              Send an email
            </a>
          </article>
          <article className='contact__option'>
            <SiWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+254101******</h5>
            <a href='https://api.whatsapp.com/send?phone+254101154502' target='_blank'>
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Enter your name' required />
          <input type='email' name='email' placeholder='Enter your email address' required />
          <textarea name='message' rows='7' placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn__primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
