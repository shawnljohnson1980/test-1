import React from "react";
import { Link } from "@reach/router";
import '../index.css';
  
const Home = () => {
  return (
    <div>
      <h1 className="mt-5">Home Page</h1>
      <br />
      <ul>
        <li>
          {/* Endpoint to route to About component */}
          <Link to="/about">About</Link>
        </li>
        <li>
          {/* Endpoint to route to Contact Us component */}
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};
  
export default Home;