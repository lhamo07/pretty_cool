import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav>
        <a href="index.html">
          <img src="finallogo.png" alt="" width="80px" height="80px" />
        </a>
        <div>
          <ul className="nav-list">
            <li className="active">
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/about">about </Link>
            </li>
            <li>
              <Link to="/contact">contact </Link>
            </li>
            <li>
              <Link to="/services">Services </Link>
            </li>
            <li>
              <Link to="/bookappointment">Book Appointment </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
