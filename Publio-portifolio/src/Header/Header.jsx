import React from "react";
import "./Header.css";
import logo from "../assets/Logo.png";
function Header() {
  return (
    <div className="Header">
      <div className="Header-logo">
        <img src={logo} />
      </div>
      <div className="Header-info">
        <a>About</a>
        <p>Resume</p>
        <p>Contact</p>
      </div>
    </div>
  );
}

export default Header;
