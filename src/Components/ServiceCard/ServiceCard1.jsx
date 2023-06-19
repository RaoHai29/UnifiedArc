import React from 'react'
import './ServiceCard.css'
import { Link } from 'react-router-dom';

import cloudimg3 from "../../Images/DevOps-FAQ.jpg"
import cloudimg4 from "../../Images/arccc.jpg"
import cloudimg5 from "../../Images/infaa.png"


const ServiceCards = [
    {
      ids:5,
      src: cloudimg4,
      Heading: "Cost Optimization",
      Title: <Link exact to="/cost">Learn More</Link>
    },
    {
      ids:6,
      src: cloudimg3,
      Heading: "DevOps",
      Title: <Link exact to="/devops">Learn More</Link>
    },
    {
        ids:7,
        src: cloudimg5,
        Heading: "IaC",
        Title: <Link exact to="/iac1">Learn More</Link>
    },
  ];

function ServiceCard1() {
  return (
    <>
           {ServiceCards.map(({ src, Heading, Title }) => (
        <div key={ServiceCards.ids} className="card1"  data-aos="fade-up">
          <div className="left">
          <img src={src} alt="cloud"></img>
          <h3>{Heading}</h3><article>{Title}</article>
          </div>
        </div>
      ))}
    </>
  )
}

export default ServiceCard1
