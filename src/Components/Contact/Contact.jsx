import React from 'react'
import "./Contact.css"
import contImage from "./../../Images/contact.png"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
function Contact() {
  const Form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lkv7ii9', 'template_yu2jrum', Form.current, 'm1l7NQRo0JR3cMuxn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
   <>
    
    <article className='Contact'>
      <div className='left-Contact'>
            <img src={contImage} alt='Contact'></img>
      </div>
      <div className='right-Contact'>
      <div class="container" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1500">  
  <form id="contact" ref={Form} onSubmit={sendEmail}>
    <h4>Let's Talk</h4>
    <fieldset>
      <input placeholder="Your Name" type="text" name='user_name' tabIndex="1" required autofocus />
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" name='user_email' tabIndex="2" required />
    </fieldset>
    <fieldset>
      <input placeholder="Subject" type="text" tabIndex="2" name='user_subject' required />
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your message here...." name='user_message' tabIndex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
</div>
      </div>
    </article>
   </>
  )
}

export default Contact
