import EligibilityCard from "./EligibilityCard";
import ToggleCard from "./ToggleCard";

const GetHelp = () => {
  return (
    <>
      <h1 className="page-header">Get Help</h1>
      <div className="imageDiv">
        <img
          src="https://i.imgur.com/VWCzSCo.jpeg"
          alt="container-cover-image"
        ></img>
      </div>

      <ToggleCard />
      {/* <EligibilityCard /> */}
    </>
  );
};

export default GetHelp;
