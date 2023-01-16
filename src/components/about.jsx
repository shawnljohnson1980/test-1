import React from "react";
import { Link } from "@reach/router";
import '../index.css';
  
const About = () => {
  return (
    <div>
        <h1 className="mt-5">About Page</h1>
      <br />
      <ul>
        <li>
          {/* Endpoint to route to Home component */}
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* Endpoint to route to Contact Us component */}
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};
  
export default About;