import "./style.css";

const Button = ({ nameButton, onClick, type, children }) => {
  return (
    <button type={type} className="MainButton" onClick={onClick}>
      {nameButton}
      {children}
    </button>
  );
};

export default Button;
