import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../styles/Navbar.css";

function handleLogin() {
  return 0;
}

class Navbar extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Discover local gems!
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Listings
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                Create Listing
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/register" className="nav-link">
                Sign Up
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/login" className="nav-link">
                Log in
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
