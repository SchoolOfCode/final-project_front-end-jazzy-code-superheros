import "./styles.css";
import Input from "../Input/Input";
import foodbanklogo from "../../img/ylfb1.png";

const LandingPage = ({handleChange, handleClick, handleEnter}) => {
    return (
        <div>
            <img src={foodbanklogo} alt="logo"></img>
            <Input handleClick={handleClick} handleChange={handleChange} handleEnter={handleEnter} />
        </div>
    )
};

export default LandingPage;

