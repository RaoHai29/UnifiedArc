import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import logoweb from '../../Images/unif-footer.png'
function Footer() {
  return (
    <>
        <footer className="footer">
  <div className="footer__addr">
  <h1><Link to="/"><img src={logoweb} alt="Unified Arc"></img></Link></h1>
        
    <h2>Contact</h2>
    <p>5534 Somewhere In. The World 22193-10212<br/></p>
    <address>
      <span><a href="mailto:example@gmail.com"> <i className="fa-brands fa-linkedin"></i></a></span>    
      <span><a href="mailto:example@gmail.com"> <i className="fa-brands fa-square-facebook"></i></a></span>
      <span><a href="mailto:example@gmail.com"> <i id = "fa" className="fa-brands fa-instagram"></i></a></span>
    </address>
  </div>
  
  <ul className="footer__nav">
    <li className="nav__item">
      <h2 className="nav__title">About Us</h2>

      <ul className="nav__ul">
        <li>
          <Link exact to="/">Home</Link>
        </li>
        <li>
          <Link exact to="/about">About</Link>
        </li>
        <li>
          <Link exact to="/about">Our Team</Link>
        </li>
            
        <li>
          <Link exact to="/about">Company</Link>
        </li>
      </ul>
    </li>
    
    <li className="nav__item nav__item--extra">
      <h2 className="nav__title">Our Services</h2>
      
      <ul className="nav__ul nav__ul--extra">
        <li>
          <Link exact to="/consulting">Cloud Consulting</Link>
        </li>
        
        <li>
          <Link exact to="/devops">DevOps</Link>
        </li>
        
        <li>
          <Link exact to="/iac1">IaC</Link>
        </li>
        
        <li>
          <Link exact to="/migration">Migration Process</Link>
        </li>
        
        <li>
          <Link exact to="/cost">Cost Optimization</Link>
        </li>
        
        <li>
          <Link exact to="/arch">Architect Management</Link>
        </li>
      </ul>
    </li>
    
    <li className="nav__item">
      <h2 className="nav__title">Legal</h2>
      
      <ul className="nav__ul">
        <li>
          <Link exact to="#">Privacy Policy</Link>
        </li>
        
        <li>
          <Link exact to="#">Terms of Use</Link>
        </li>
        
        <li>
          <Link exact to="/contactpage">Sitemap</Link>
        </li>
      </ul>
    </li>
  </ul>
  
  <div className="legal">
    <p>&copy; 2023 Unified Arc. All rights reserved.</p>
    
    
  </div>
</footer>
    </>
  )
}

export default Footer
