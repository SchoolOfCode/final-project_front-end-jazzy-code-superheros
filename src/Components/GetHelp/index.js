// import EligibilityCard from "./EligibilityCard";
// import ToggleCard from "./ToggleCard";
import ToggleCardGeneral from "./ToggleCardGeneral";
import P from "../StyledPara";
import D from "../StyledDiv";
import "./style.css";

const GetHelp = ({ foodBankData }) => {
  console.log("foodBankData :>> ", foodBankData);
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

      <ToggleCardGeneral cardTitle={"Using a Foodbank"}>
        <P>
          Life is unpredictable, and everyone faces unexpected challenges. We
          know it can be hard to ask for help. It absolutely shouldn't be;
          regardless, it can be. <br />
          <br />
          There are over 2500 foodbanks which are there to act as a support for
          anyone to lean on when times are tough. Asking for a hand when
          difficulties arise will not be met with judgement, stigma or pity -
          these organisations are run with the aim of building a kinder
          community that checks that nobody is left behind.
        </P>
      </ToggleCardGeneral>

      <ToggleCardGeneral cardTitle={"Eligibility & Referrals"}>
        <D>
          <p>
            It is important that getting help when needed is not difficult. With
            that being said, the topic of eligibility for food support is
            unfortunately not entirely straightforward as rules differ depending
            on location. <br />
            <br />
            If you are in urgent need of assistance please contact your local
            community foodbank directly. Even if they are not able to
            accommodate you, they will be best placed to help relieve the
            immediate pressure.
            <br />
            <br /> Otherwise, as a rule, you will need someone to provide a
            referral. For example: a charity, GP, or social worker. One of the
            easiest ways to ask for a referral (which we would recommend),
            regardless of your location, is to contact your{" "}
            <a href="https://www.citizensadvice.org.uk/about-us/contact-us/contact-us/search-for-your-local-citizens-advice/">
              nearest Citizens Advice office
            </a>
            .<br />
            <br />
            Tell the Citizens Advice staff that you need a food bank. They will
            try to make you an appointment so you can discuss your situation
            with one of their advisers.
          </p>
        </D>
      </ToggleCardGeneral>

      <ToggleCardGeneral cardTitle={"What Do You Need?"}>
        <D>
          <p>You will want to have the following information ready: </p>
          <ul>
            <li>Your name</li>
            <li>Your address</li>
            <li>Your telephone number</li>
            <li>Your number of people in your household</li>
            <li>
              Any specific dietary requirements (e.g. if you are a diabetic)
            </li>
            <li>What cooking facilities you have</li>
            <li>
              What day you need the food parcel for (i.e. on a Tuesday or
              Friday)
            </li>
          </ul>
        </D>
      </ToggleCardGeneral>
      <ToggleCardGeneral cardTitle={"Additional Support"}>
        <D>
          <p>
            Hunger is a critical need. But sometimes there are other issues
            which cause distress.
            <br />
            <br />
            Foodbanks will often offer additional support. This could include
            things like debt advice, mental health support, or benefits
            guidance. <br />
            <br />
            Foodbanks rely on the support of their local communities to support
            people in crisis, which is why they are often best placed to help
            you in your area.
          </p>
        </D>
      </ToggleCardGeneral>

      {foodBankData.urls.homepage ? (
        <ToggleCardGeneral cardTitle={"Specific Information"}>
          <D>
            <p>
              The information on this page is currently quite generic due to all
              of the differing rules.{" "}
            </p>
            <p>
              At this time, for more specific information on your selected
              foodbank please see their website:{" "}
            </p>
            <a href={foodBankData.urls.homepage}>
              {foodBankData.urls.homepage}
            </a>
          </D>
        </ToggleCardGeneral>
      ) : null}
      <img
        className="mapImage"
        src="https://www.givefood.org.uk/needs/at/vauxhall/map.png"
        alt="map location"
      />
    </div>
  );
};

export default GetHelp;
