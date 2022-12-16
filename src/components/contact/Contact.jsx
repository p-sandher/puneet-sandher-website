import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { useRef } from 'react';

import emailjs, { sendForm } from 'emailjs-com'


const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hfnioj5', 'template_ct3f6zy', form.current, '8h1chSHfoGAChxa5z')
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Let's Connect</h5>
      <h2> </h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h4>puneetsandher@gmail.com</h4>
            <a href="mailto:puneetsandher@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h4>Puneet Sandher</h4>
            <a href="https://www.linkedin.com/in/puneet-sandher/" target="_blank">Connect With Me</a>
          </article>

          <article className='contact__option'>
            <FaGithub className='contact__option-icon'/>
            <h4>GitHub</h4>
            <h4>p-sandher</h4>
            <a href="https://github.com/p-sandher" target="_blank">Browse my GitHub</a>
          </article>
        
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required/>
          <input type="email" name='email' placeholder='Email' required/>
          <textarea name="message" rows="7" placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact