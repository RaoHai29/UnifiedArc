import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logoweb from "../../Images/unif.png"
function Navbar() {
  const [scrollClass, setScrollClass] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScrollClass("Head1");
      } else {
        setScrollClass("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Responsive Navbar menu */}
      <div className="logoRes"><Link to="/"><img src={logoweb} alt="Unified Arc"></img></Link></div>
      <input type="checkbox" id="active" />
      <label for="active" className="menu-btn Hamburger">
        <span></span>
      </label>
      <label for="active" className="close"></label>
      <div className="wrapper">
        <ul >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
          <Link to="/ServicePage">Services</Link>
          </li>
          <li>
            <Link to="#">Articles</Link>
          </li>
          <li>
            <Link to="/contactpage">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Navbar Main */}
      <header className={`Head ${scrollClass}`}>
        <div className="logo"><Link to="/"><img src={logoweb} alt="Unified Arc"></img></Link></div>
        <ul id="menu">
          <li>
            <Link to="/" className="all-links">Home</Link>
          </li>
          <li>
            <Link to="/about" className="all-links">About</Link>
          </li>
          <li>
            <Link to="#" className="all-links">Services</Link>
            <ul>
              <li>
                <Link to="/consulting">Cloud Consulting</Link>
              </li>
              <li>
                <Link to="/migration">Migration Process</Link>
              </li>
              <li>
                <Link to="/arch">Architect Maintenance</Link>
              </li>
              <li>
                <Link to="/cost">Cost Optimization</Link>
              </li>
              <li>
                <Link to="/devops">DevOps</Link>
              </li>
              <li>
                <Link to="/iac1">IaC</Link>
              </li>
              
            </ul>
          </li>
          <li>
            <Link to="#" className="all-links">Articles</Link>
          </li>
          <li>
            <Link to="/contactpage" className="contact">
              Contact
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Navbar;
