import React from "react";
import "./AboutCard.css";
import Cloud1 from "./../../Images/inter.png";
import headphone from "./../../Images/user.png";
import shield from "./../../Images/dollar.png";

const Aboutlist = [
  {
    id:0,
    src: Cloud1,
    Heading: "Providing Expansions or Consolidation",
    Title:
      "At our cloud consulting firm, we understand that business needs can change and evolve over time. That's why we offer specialized services in providing cloud expansions or consolidations, tailored to the unique requirements of our clients.",
  },
  {
    id:1,
    src: headphone,
    Heading: "Helpdesk Service",
    Title:
      "Our help desk service is designed to be the first line of support for our clients, providing timely and efficient assistance for their technical issues and inquiries. We understand that technology is integral to our clients' operations",
  },
  {
    id:2,
    src: shield,
    Heading: "Affordable Price Packages",
    Title:
      "We firmly believe in providing high-quality services at affordable prices. We understand that cost is a significant factor for businesses of all sizes, and we are committed to ensuring that our clients receive exceptional value for their investment.",
  },
];
function AboutCard() {
  return (
    <>
      {Aboutlist.map(({ src, Heading, Title }) => (
        <div key={Aboutlist.id} className="aboutcard"  data-aos="fade-up">
          <div className="left">
          <img src={src} alt="cloud"></img>
          </div>
          <div className="right">
          <h3>{Heading}</h3><article>{Title}</article>
          </div>
        </div>
      ))}
    </>
  );
}

export default AboutCard;
