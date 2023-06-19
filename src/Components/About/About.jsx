import React from "react";
import "./about.css";
import Navbar from "./../Navbar/Navbar";
import cloud from "./../../Images/c111.png";
import AboutCard from "../About Card/AboutCard";
import bus from "./../../Images/bus.png"
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

function About() {
  return (
    <>
      <Helmet>
          <title>Unified Arc | About</title>
      </Helmet>
      <div className="aboutus">
      
        <Navbar />
      </div>
      <div className="aboutbg">

      <div className="intro-about">
        <h1>What We Do</h1>
        <article>
          At our cloud consulting firm, we are dedicated to helping businesses navigate the complexities of cloud computing and harness its full potential. Our primary focus is to provide expert guidance, strategic planning, and technical expertise to organizations seeking to leverage cloud technology.
Our team of experienced cloud consultants understands that each business has unique needs and objectives. We work closely with our clients to assess their existing infrastructure, identify pain points, and define clear cloud migration strategies tailored to their specific requirements. We believe in taking a holistic approach, considering factors such as scalability, security, cost-efficiency, and compliance to ensure a comprehensive cloud solution that aligns with our clients' long-term goals.

        </article>
      </div>
      <div className="about-main">
        <div className="about-left">
          <img  src={cloud} alt="Cloud About Service"></img>
        </div>

        <div className="about-right">
          <AboutCard />
        </div>
      </div>
      </div> 

      
                     {/* Our belive Start */}

      <div className="ourbelive-main curve">
      <div className="ourbelive-left">
        <img src={bus} alt="ourbelive" ></img>
      </div>
      <div className="ourbelive-right"   data-aos="zoom-in" data-aos-duration="1200" >
          <h5>Our Believe</h5>
          <h3>Unleash Your Potential and Fearlessly <br /> Adopt New Technology</h3>
          <article>
          At our company, our beliefs are at the core of everything we do. We firmly believe in the transformative power of technology and its ability to drive positive change in the world. We believe that technology has the potential to break down barriers, empower individuals, and create opportunities for growth and innovation.
One of our core beliefs is in the importance of collaboration and partnership. We believe that by working together, we can achieve more than we ever could alone. We value open communication, trust, and mutual respect in all of our relationships, whether it's with our clients, partners, or team members. We strive to foster an environment where diverse perspectives are embraced, and everyone has a voice. We also believe in the pursuit of excellence. We are committed to delivering the highest quality solutions and services to our clients. We believe in continuous learning, staying up-to-date with the latest technologies and industry trends, and pushing the boundaries of what is possible. We strive for innovation and are not afraid to challenge the status quo to find better, more efficient solutions.
Furthermore, we believe in the ethical and responsible use of technology. We recognize the impact our actions can have on individuals, communities, and the environment. We are committed to conducting business in a socially and environmentally responsible manner, ensuring that our solutions and services are aligned with ethical standards and sustainability principles.
Ultimately, our beliefs guide us in our mission to empower businesses and individuals to thrive in a rapidly evolving digital landscape. We are driven by a passion for making a positive impact, delivering value to our clients, and contributing to the advancement of society as a whole. Our beliefs shape our actions, inspire our innovation, and serve as the foundation of our company's culture and purpose.

          </article>
      </div>

      </div>
                                {/* Our belive End  */}
                    
            
          <div className="Ready">
              <div className="Ready-top">
                <div className="Ready-left">
                  <h1 className="h1">So What is Next ?</h1>
                  <h1>Are you Ready? Let's Work</h1>
                </div>
                <div className="Ready-right">
                <br /><br /><br />
                  <Link exact to='/contactpage' className="Cont">CONTACT US</Link>
                </div>
              </div>
          </div>
    
          <Footer />
    </>
  );
}

export default About;
