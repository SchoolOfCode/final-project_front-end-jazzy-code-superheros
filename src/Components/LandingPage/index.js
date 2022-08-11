import "./styles.css";
import Input from "../Input/Input";
import Button from "../Button/index.js";
import { useNavigate } from "react-router-dom";
import eggsBGMobile from "../../img/eggsBGMobile.jpg";
import logo from "../../img/logo.png";

const LandingPage = ({
  handleChange,
  handleClick,
  handleEnter,
  setFoodBankData,
  searchArray,
}) => {
  const array = searchArray ? searchArray.slice(0, 5) : [];
  // console.log("Landing page rerenders");
  // console.log(searchArray);

  const navigate = useNavigate();

  return (
    <section>
      <div className="intro">
        <img src={eggsBGMobile} className="background-img" alt="" />
        <img src={logo} className="logo" alt="logo" />
        <div className="text">
          <h1>We're here to help connect people to their local foodbanks</h1>
          <p className="h1-p">
            To see what's available in your area search using your postcode or
            town below
          </p>
          <Input
            handleClick={handleClick}
            handleChange={handleChange}
            handleEnter={handleEnter}
            className="input-landing"
          />
          <h2>
            For general information or if you're a charitable organisation
            looking to use our free service to connect with your local community
            click on the About Us button below.
          </h2>
          <div className="about-button">
            <Button
              nameButton="About Us"
              onClick={() => {
                navigate("/aboutus");
              }}
            />
          </div>
        </div>
      </div>
      <div className="admin-container">
        <h3>Are you an Admin or a FoodBank Manager?</h3>
        <button className="loginbutton"> Login <br></br>Sign up Now </button>  
      </div>
      <div className="foodbank-list">
        {searchArray ? (
          <h2 className="margin0">Please select a Food Bank: </h2>
        ) : null}
        {array.map((item, index) => {
          return (
            <section className="search-results-container" key={index}>
              <div
                className="search-results"
                onClick={() => setFoodBankData(searchArray[index])}
              >
                <h4 className="select-bank">{item.name}</h4>
                <p>{item.address}</p>
                <p>Distance from you {item.distance_mi.toFixed(1)} miles</p>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default LandingPage;
