import { useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";
import "./style.css";

const ToggleCard = ({ cardTitle, cardBody }) => {
  const [isTogged, setIsTogged] = useState(false);

  const handleToggle = () => {
    setIsTogged(!isTogged);
  };

  return (
    <div className="ToggleCardContainer">
      <button className="accordion" onClick={handleToggle}>
        <div></div>

        <div className="button-accordion-title">Eligibility Criteria</div>
        {isTogged ? (
          <FaArrowCircleUp className="toggleArrow" />
        ) : (
          <FaArrowCircleDown className="toggleArrow" />
        )}
      </button>
      <div className={isTogged ? "togged" : "panel"}>
        <p className="toggleText">
          something about how food banks are there for anyone in the community
          who needs them
        </p>
      </div>
    </div>
  );
};

export default ToggleCard;
