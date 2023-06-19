import React from "react";
import { Link } from "react-router-dom";
import "./ServicePages.css";

function ServicePages() {
  return (
    <>
      <ul className="Service-ul">
      <li className="Home">
          <Link to="/">Home</Link>
        </li>
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
    </>
  );
}

export default ServicePages;
