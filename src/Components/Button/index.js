import "./style.css";

const Button = ({ nameButton, onClick }) => {
  return (
    <button className="MainButton" onClick={onClick}>
      {nameButton}
    </button>
  );
};

export default Button;
