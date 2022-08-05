// import EligibilityCard from "./EligibilityCard";
import ToggleCard from "./ToggleCard";
// import ToggleCardKids from "./ToggleCardChildren";
import "./style.css";

import Container from "../Map/index.js";

const getHelpData = [
  {
    cardTitle: "Eligibility Criteria",
    cardBody:
      "something about how food banks are there for anyone in the community who needs them",
  },
  {
    cardTitle: "Food Vouchers",
    cardBody:
      "In order to get help from the food bank you will need to be referred with a voucher",
  },
  {
    cardTitle: "Referral Process",
    cardBody:
      "Each food bank works with different frontline professionals, like:",
  },
  {
    cardTitle: "Using Your Voucher",
    cardBody: "This is how to use a voucher",
  },
  {
    cardTitle: "Specific info",
    cardBody: `<a href="www.foodbankwebsite.com">www.foodbankwebsite.com</a>`,
  },
];

const GetHelp = () => {
  return (
    <div className="gethelp">
      <h1 className="page-header">Get Help</h1>
      <div className="imageDiv">
        <img
          className="bannerImage"
          src="https://i.imgur.com/VWCzSCo.jpeg"
          alt="container cover, people giving help"
        ></img>
      </div>

      {getHelpData.map((cardData) => {
        return (
          <ToggleCard
            cardTitle={cardData.cardTitle}
            cardBody={cardData.cardBody}
          />
        );
      })}
      {/* <img
        className="mapImage"
        src="https://www.givefood.org.uk/needs/at/vauxhall/map.png"
        alt="map location"
      /> */}
      <Container />
    </div>
  );
};

export default GetHelp;
