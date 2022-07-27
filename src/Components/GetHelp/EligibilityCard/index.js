import "./style.css";

function EligibilityCard() {
  return (
    <div className="EligibilityContainer">
      <img
        src="https://i.imgur.com/VWCzSCo.jpeg"
        alt="container-cover-image"
      ></img>
      <h1>Eligibility Criteria</h1>
      <p>
        something about how food banks are there for anyone in the community who
        needs them
      </p>
      <h2>Food Vouchers</h2>
      <p>
        In order to get help from the food bank you will need to be referred
        with a voucher
      </p>

      <h3>Referral Process</h3>
      <p>
        Each food bank works with different frontline professionals, like:
        <ul>
          <li>doctors</li>
          <li>health visitors</li>
          <li>social workers</li>
          <li>citizens advice</li>
        </ul>
      </p>
      <h3>Using Your Voucher</h3>
      <p>This is how to use a voucher</p>

      <h3>Specific info</h3>
      <a href="www.foodbankwebsite.com">www.foodbankwebsite.com</a>
    </div>
  );
}

export default EligibilityCard;
