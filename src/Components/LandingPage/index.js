import "./styles.css";
import Input from "../Input/Input";
import { Link } from "react-router-dom";

const LandingPage = ({
  handleChange,
  handleClick,
  handleEnter,
  setFoodBankData,
  searchArray,
}) => {
  const array = searchArray ? searchArray.slice(0, 5) : [];
  // console.log("Landing page rerenders");
  //console.log(searchArray);


  return (
    <body>
      <section className="first">
        <div className="intro">
          <div className="container-img">
          </div>
        
          <div className="landing-text">
            <h1 className="h1-landing">
              We're here to help connect people to their local foodbanks
            </h1>
            <p className="h1-p">
              To see what's available in your area search using your postcode or
              town below
            </p>
            <div className="input-box">
              <Input
                handleClick={handleClick}
                handleChange={handleChange}
                handleEnter={handleEnter}
                className="input-landing"
              />
            </div>
   
  {/*not working correctly yet
            /* <h2 className="h2-landing">
              For general information or if you're a charitable organisation
              looking to use our free service to connect with your local
              community click on the<br></br> About Us button below.
            </h2>
            <div className="about-button">
              <Button
                nameButton="About Us"
                onClick={() => {
                  navigate("/AboutUsPage");
                }}
              />
            </div> */}
          </div>
        <div className="admin-container">
          <h3 className="h3-landing">
            Are you an Admin or a FoodBank Manager?
          </h3>
          <Link to="/admin">
            <button className="loginbutton">
              {" "}
              Login <br></br>Sign up Now{" "}
            </button>
          </Link>
        </div>   
        <div className="nonsense-css-1">
        <p className="nonsense-css-2">1</p>
      </div>      
      </div>
      </section>
      
      <section className="foodbank-list">
        {searchArray.length > 0 ? (
          <h4 className="h4-landing">Please select a Food Bank: </h4>
        ) : null}
        {array.map((item, index) => {
          return (
            <div className="search-results-container" key={index}>
              <div
                className="search-results"
                onClick={() => setFoodBankData(searchArray[index])}
              >
                <Link className="landingPageLink" to="/">
                  <h4 className="select-bank">{item.name}</h4>
                  <p>{item.address}</p>
                  {item?.distance_mi ? (
                    <p>
                      Distance from you {item?.distance_mi?.toFixed(1)} miles
                    </p>
                  ) : null}
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </body>
  );
};
export default LandingPage;