import React from 'react'
import './ServiceCard.css'
import { Link } from 'react-router-dom';
import cloudimg from "../../Images/cloud123.jpg"
import cloudimg1 from "../../Images/migra.jpg"
import cloudimg2 from "../../Images/arch-sir.jpg"



const ServiceCards = [
    {
      id:0,
      src: cloudimg,
      Heading: "Cloud Consulting",
      Title: <Link exact to="/consulting">Learn More</Link>
    },
    {
      id:1,
      src: cloudimg1,
      Heading: "Migration Process",
      Title: <Link exact to="/migration">Learn More</Link>
    },
    {
        id:2,
        src: cloudimg2,
        Heading: "Architect Management",
        Title: <Link exact to="/arch">Learn More</Link>
    },
  ];

function ServiceCard() {
  return (
    <>
           {ServiceCards.map(({ src, Heading, Title }) => (
        <div key={ServiceCards.id} className="card1"  data-aos="fade-up">
          <div className="left">
          <img src={src} alt="cloud"></img>
          <h3>{Heading}</h3><article>{Title}</article>
          </div>
        </div>
      ))}
    </>
  )
}

export default ServiceCard
