import React from "react";
import PropTypes from "prop-types";

function handleLogin() {
  return 0;
}

class Navbar extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="navBar">
        <header>
          <button className="loginButton" onClick={handleLogin()}>
            Log In
          </button>
        </header>
      </div>
    );
  }
}

export default Navbar;
