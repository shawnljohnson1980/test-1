import React from "react";
import { Link } from "@reach/router";
import "../index.css";

const Contact = () => {
  return (
    <>
      <h1 className="mt-5">Contact Us Page</h1>
      <br />
      <ul>
        <li>
          {/* Endpoint to route to Home component */}
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* Endpoint to route to About component */}
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div className="col mt-5">
    <form action="contactus" method="post" className="border border-round border-dark shadow">
      <label htmlFor="name"className="me-2">Name:</label>
      <input type="text" className="p-1 shadow border border-round" placeholder="Name"></input>
      <label htmlFor="phone" className="me-2">Phone Number</label>
      <input type="tel"placeholder="000-000-0000 shadow border border-rounded" className="p-1 shadow border border-round"></input>
      <label htmlFor="comment"className="me-2"></label>
      <textarea placeholder="Your thoughts here..." className="p-1 shadow border border-round" ></textarea>

    </form>
    </div>
    </>
  );
};

export default Contact;
