import React from "react";
import "./Team.css";
import person1 from "../../Images/Co-Founder1.jpg";
import person2 from "../../Images/Co-Founder2.jpg";
import person3 from "../../Images/Co-3.jpg";
const OurTeamlist = [
  {
    
    src: person1,
    Heading: "(Co-Founder)",
    Title: "Muhammad Saeed",
  },
  {
    src: person2,
    Heading: "(Co-Founder)",
    Title: "Farrukh Abdusalamov",
  },
  {
    src: person3,
    Heading: "(CCO)",
    Title: "Muzzammil Aslam",
  },
];

function Team() {
  return (
    <>
      <div className="Ourteam">
        {OurTeamlist.map(({ src, Heading, Title }) => (
          <div
            className="OurTeamMember"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <div className="OurteamCard">
              <img src={src} alt="Co-Founder"></img>
              <h3>{Heading}</h3>
              <h6>{Title}</h6>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Team;
