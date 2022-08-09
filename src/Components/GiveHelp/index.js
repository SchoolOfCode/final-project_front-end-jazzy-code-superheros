import { List } from "../List";
import ToggleCardGeneral from "../GetHelp/ToggleCardGeneral";
import Button from "../Button";
import Container from "../Map/Map.js"
import "./style.css";

const GiveHelp = ({ foodBankData }) => {
  return (
    <div className="give-help">
      <h1>Give Help</h1>

      <div className="imageDiv">
        <img
          className="bannerImage"
          src="https://i.imgur.com/VWCzSCo.jpeg"
          alt="container cover, people giving help"
        ></img>
      </div>

      <ToggleCardGeneral
        cardTitle="Donate Your Money"
        cardBody="Any financial contribution you can make will enable us to continue serving our community"
      >
        <Button nameButton="Donate" />
      </ToggleCardGeneral>

      <ToggleCardGeneral cardTitle="Donate Items">
        <List foodBankData={foodBankData} />
      </ToggleCardGeneral>

      <ToggleCardGeneral
        cardTitle="Donate Your Time"
        cardBody="Placeholder for form"
      />
      <Container foodBankData={foodBankData}/>
    </div>
  );
};

export default GiveHelp;
