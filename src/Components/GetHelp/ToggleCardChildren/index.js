import { useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";
import "./style.css";

const ToggleCardKids = ({ cardTitle, cardBody, children }) => {
  const [isTogged, setIsTogged] = useState(false);

  const handleToggle = () => {
    setIsTogged(!isTogged);
  };

  return (
    <div className="ToggleCardContainer">
      <button className="accordion" onClick={handleToggle}>
        <div className="button-accordion-title">{cardTitle}</div>

        {isTogged ? (
          <FaArrowCircleUp className="toggleArrow" />
        ) : (
          <FaArrowCircleDown className="toggleArrow" />
        )}
      </button>
      <div className={isTogged ? "togged" : "panel"}>
        {cardBody ? <p className="toggleText">{cardBody}</p> : null}
        {children}
      </div>
    </div>
  );
};

export default ToggleCardKids;
