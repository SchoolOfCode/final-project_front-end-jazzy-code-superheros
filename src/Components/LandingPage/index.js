import "./styles.css";
import Input from "../Input/Input";
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
  console.log("Landing page rerenders");
  console.log(searchArray);
  return (
    <section>
      <div className="intro">
        <img src={eggsBGMobile} className="background-img" alt="" />
        <img src={logo} className="logo" alt="logo" />
        <div className="text">
          <h1>We're here to help connect people to their local foodbanks</h1>
          <p>
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
            (click here button)
          </h2>
        </div>
      </div>
      <div className="foodbank-list">
        {searchArray ? (
          <h2 className="margin0">Please select a Food Bank: </h2>
        ) : null}
        {array.map((item, index) => {
          return (
            <section className="search-results-container">
              <div
                className="search-results"
                key={index}
                onClick={() => setFoodBankData(searchArray[index])}
              >
                <h3 className="select-bank">{item.name}</h3>
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

