import "./style.css";
import Button from "../Button";

import { useNavigate } from "react-router-dom";

  

//The props from the home page are being passed down to render on the About Us component, This page on line 10 is being condicional
//Because of the async function on the home page
const AboutUs = ({ foodBankData }) => {

  const navigate = useNavigate();

  //dev feedback only remove
  //console.log(`within the AboutUs component this is the time and foodBankData >>`, Date(), foodBankData);

  return (
    <div className="AboutUsContainer">
      <h1 id="foodbank-name-home-header">
        {" "}
        {foodBankData ? foodBankData.name : null}{" "}
      </h1>
      {foodBankData ? (
        <div className="TextContainer">
          {/* <h3>Your Support is Really Powerful.​</h3> */}
          {/* <h3>{foodBankData ? foodBankData.name : null} ​</h3> */}

          {/* <p className="Message">
            "The secret to happiness lies in helping others. Never underestimate
            the difference YOU can make "
          </p> */}

          <p className="justify">
            <b>Address: </b>
            {foodBankData.address}
          </p>

          <p className="justify">
            <b>Email:</b> {foodBankData.email}
          </p>
          {foodBankData?.urls?.homepage !== undefined ? (
            <p className="justify">
              <b>Website:</b>{" "}
              <a href={foodBankData.urls.homepage}>
                {foodBankData.urls.homepage}
              </a>
            </p>
          ) : null}

          <p className="justify">
            <b>Phone:</b> {foodBankData.phone}
          </p>
          <Button nameButton="Change Foodbank" onClick={()=> navigate("/search")} />
        </div>
      ) : null}
    </div>
  );
};

export default AboutUs;
