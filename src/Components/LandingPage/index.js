import "./styles.css";
import Input from "../Input/Input";
import foodbanklogo from "../../img/ylfb1.png";
import { Link } from "react-router-dom";



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
      <h3 className="styledh3">A lot of small foodbanks don't have the ways to pay for a website. Rather you want to give help or get help, Everything starts by typing your post code and selecting your foodbank</h3>
      <Input
        handleClick={handleClick}
        handleChange={handleChange}
        handleEnter={handleEnter}
       className="input-landing"/>
       <div className="admincontainer">
       
       <h4 className="margin0">Are you an Admin or a FoodBank Manager ?</h4>
       <Link to="/admin">
        <button className="loginbutton"> Login <br></br>Sign up Now </button>
       </Link>
       </div>
    
      {searchArray ? <h2 className="margin0">Please select a Food Bank: </h2> : null}
      {array.map((item, index) => {
        return (
          <div key={index} className="search-results-container">
            <div
              className="search-results"
              
              onClick={() => setFoodBankData(searchArray[index])}
            >
              <Link className='landingPageLink' to="/">
                <h3 className="select-bank">{item?.name}</h3>
                <p>{item?.address}</p>
                {item?.distance_mi ? 
                <p>Distance from you {item?.distance_mi?.toFixed(1)} miles</p> :
                null}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LandingPage;
