import React from "react";
import Navbar from "./../Navbar/Navbar";
import Services from "./../Services/Services";
import Footer from './../footer/Footer'
import "./Main.css";
import {Helmet} from "react-helmet"
import a1 from './../../Images/cl2.png';
import Contact from "../Contact/Contact";
import { Link } from "react-router-dom";
function Main() {
  return (
    <>
      <main>
      <Helmet>
          <title>Unified Arc | Home</title>
      </Helmet>
      <Navbar />
        
        <div className="main1">
          <div className="left-side">
            <h1>Elevate Your Business with Expert Cloud Computing<br /> Consulting</h1>

            
            <article>
            Unlocking Innovation by moving to cloud with endless possibilities and streamlined efficiency.
            </article>
            
            <button><Link className="Btn-Link" exact to='/contactpage'>Get Started</Link></button>
          </div>
          <div className="right-side">
            <img src={a1} alt="cloud" ></img>
          </div>
        </div>
      </main>
      
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default Main;
