import React from "react";
import "./ContactPage.css";
import Navbar from "../Navbar/Navbar";
import conimg from "../../Images/conimg.png";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { Helmet } from "react-helmet";
import Footer from "../footer/Footer";
function ContactPage() {
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
      
      <Helmet>
          <title>Unified Arc | Contact Us</title>
      </Helmet>
      <div className="contactNav">
        <Navbar />
      </div>

      {/* contact main Start */}

      <div className="contact_main">
        <div className="contact_left">
          <h1>If you need to contact us, Please fill out the form below.</h1>
          <form ref={Form} onSubmit={sendEmail}>
            <fieldset>
              <input
                name="user_name"
                placeholder="Your Name ..."
                type="text"
                tabIndex="1"
                required
                autofocus
              />
            </fieldset>
            <fieldset>
              <input
                name="user_email"
                placeholder="Your Email ..."
                type="email"
                tabIndex="2"
                required
              />
            </fieldset>
            <fieldset>
              <input
               name="user_subject"
               placeholder="Subject" type="text" tabIndex="2" required />
            </fieldset>
            <fieldset>
              <textarea
                name="user_message"
                placeholder="Type your message here...."
                tabIndex="5"
                required
              ></textarea>
            </fieldset>
            <fieldset>
              <button
                name="submit"
                type="submit"
                id="contact-submit"
                data-submit="...Sending"
              >
                Submit
              </button>
            </fieldset>
          </form>
        </div>

        <div className="contact_right">
          <img src={conimg} alt="Contactus"></img>
        </div>
      </div>

      <div className="contact_main1">
        <div className="contact_left1">
          <h1>Out Contact Info</h1>
          <h2>Address</h2><hr />
          <p>Doemon Demon 77/h9 South Road,<br /> USA - 009877</p>
          <br />
          <h2>Email</h2><hr />
          <p>abc@gmail.com</p>
          <br />
          <h2>Phone</h2><hr />
          <p>0921-11332-123</p>
        </div>

        <div className="contact_right1">
        <iframe title="Company" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5579.436691471282!2d-76.50275067385236!3d38.294497099603575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b763d4acaeb5bf%3A0x5da525332e9253f6!2sWalmart%20Supercenter!5e0!3m2!1sen!2s!4v1684502741039!5m2!1sen!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;
