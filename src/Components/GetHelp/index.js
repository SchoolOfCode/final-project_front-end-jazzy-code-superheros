import EligibilityCard from "./EligibilityCard";
import ToggleCard from "./ToggleCard";

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

/*     
     

      <h3></h3>
      <p>
        
        <ul>
          <li>doctors</li>
          <li>health visitors</li>
          <li>social workers</li>
          <li>citizens advice</li>
        </ul>
      </p>
      <h3></h3>
      <p></p>

      <h3></h3>
      
*/

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
      {getHelpData.map((cardData) => {
        return (
          <ToggleCard
            cardTitle={cardData.cardTitle}
            cardBody={cardData.cardBody}
          />
        );
      })}

      {/* <EligibilityCard /> */}
    </>
  );
};

export default GetHelp;
