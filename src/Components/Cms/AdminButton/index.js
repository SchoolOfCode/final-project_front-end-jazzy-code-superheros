import styled from "@emotion/styled";

const StyleButton = styled.button`
  color: white;

  border-radius: 10px;
  height: 30px;
  width: 30px;

  margin: 0 10px;
`;

const Button = ({ onClick, type, children, className, value }) => {
  return (
    <StyleButton
      type={type}
      className={className}
      onClick={onClick}
      value={value}
    >
      {children}
    </StyleButton>
  );
};

export default Button;
