import "./styles.css";
import Input from "../Input/Input";
import foodbanklogo from "../../img/ylfb1.png";

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
    <div className="landing-container">
      <img src={foodbanklogo} className="img-logo" alt="logo"></img>
      <Input
        handleClick={handleClick}
        handleChange={handleChange}
        handleEnter={handleEnter}
       className="input-landing"/>
      {searchArray ? <h2 className="margin0">Please select a Food Bank: </h2> : null}
      {array.map((item, index) => {
        return (
          <div className="search-results-container">
            <div
              className="search-results"
              key={index}
              onClick={() => setFoodBankData(searchArray[index])}
            >
              <h3>{item.name}</h3>
              <p>{item.address}</p>
              <p>Distance from you {item.distance_mi.toFixed(1)} miles</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LandingPage;
