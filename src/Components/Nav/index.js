import { useState } from "react";
import foodbanklogo from "../../img/ylfb1.png";

import { Link } from "react-router-dom";

import "./style.css";

export const Nav = () => {
  const [isActive, setIsActive] = useState(`false`);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div id="outerNavDiv" className="?">
      <div id="innerNavDiv" className="?">
        <nav id="navBar">
          <div id="logo-container">
            <img
              id="nav-logo"
              src={foodbanklogo}
              alt="Your Local Food Bank Logo"
            />
          </div>

          <a href="/" className="toggleButton" onClick={handleToggle}>
            <span className="bar" />

            <span className="bar" />

            <span className="bar" />
          </a>

          <div id="navLinks" className={isActive ? `active` : null}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/search">Search</Link>
              </li>

              <li>
                <Link to="/gethelp">Get Help</Link>
              </li>

              <li>
                <Link to="/givehelp">Give Help</Link>
              </li>

              <li>
                <Link to="/faq">FAQs</Link>
              </li>

              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
