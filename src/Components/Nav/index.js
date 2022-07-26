import { useState } from "react";
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
          <div>
            <span>Your Local Food Bank</span>
          </div>

          <a href="#" className="toggleButton" onClick={handleToggle}>
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
                <a href="#">FAQs</a>
              </li>

              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
