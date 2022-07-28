import { useState } from "react";
import "./style.css";

const ToggleCard = ({ cardTitle, cardBody }) => {
  const [isTogged, setIsTogged] = useState(false);

  const handleToggle = () => {
    setIsTogged(!isTogged);
  };

  return (
    <div className="ToggleCardContainer">
      <button className="accordion" onClick={handleToggle}>
        This is a title
      </button>
      <div className={isTogged ? "togged" : "panel"}>
        <p>This is some text</p>
      </div>
    </div>
  );
};

export default ToggleCard;
