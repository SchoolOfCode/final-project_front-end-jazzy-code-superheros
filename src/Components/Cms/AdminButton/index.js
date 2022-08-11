import styled from "@emotion/styled";

const StyleButton = styled.button`
  color: white;
  background-color: #219d80;
  border-radius: 10px;
  height: 30px;
  width: 30px;
  border-color: #6cd9c0;
  margin: 0 10px;
`;

const Button = ({ onClick, type, children, className }) => {
  return (
    <StyleButton type={type} className={className} onClick={onClick}>
      {children}
    </StyleButton>
  );
};

export default Button;
