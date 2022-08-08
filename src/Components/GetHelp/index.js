// import EligibilityCard from "./EligibilityCard";
// import ToggleCard from "./ToggleCard";
import ToggleCardGeneral from "./ToggleCardGeneral";
import "./style.css";

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

      {/* {getHelpData.map((cardData) => {
        return (
          <ToggleCard
            cardTitle={cardData.cardTitle}
            cardBody={cardData.cardBody}
          />
        );
      })} */}

      <img
        className="mapImage"
        src="https://www.givefood.org.uk/needs/at/vauxhall/map.png"
        alt="map location"
      />
    </div>
  );
};

export default GetHelp;
