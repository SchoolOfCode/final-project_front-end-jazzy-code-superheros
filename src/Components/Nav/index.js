import { useState } from "react";
import foodbanklogo from "../../img/ylfb1.png";

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
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/gethelp">Get Help</a>
              </li>

              <li>
                <a href="/givehelp">Give Help</a>
              </li>

              <li>
                <a href="/faq">FAQs</a>
              </li>

              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
