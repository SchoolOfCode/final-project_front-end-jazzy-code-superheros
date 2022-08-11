// import EligibilityCard from "./EligibilityCard";
// import ToggleCard from "./ToggleCard";
import ToggleCardGeneral from "./ToggleCardGeneral";
import Container from "../Map/Map.js";
import D from "../StyledDiv";
import "./style.css";
import StyleD from "../MotionDiv";

const GetHelp = ({ foodBankData }) => {
  //dev feedback only remove
  //console.log("foodBankData :>> ", foodBankData);

  return (
    <div className="gethelp">
      <div className="imageDiv">
        <img
          className="bannerImage"
          src="https://i.imgur.com/YeYG3uz.jpg"
          alt="container cover, people giving help"
        ></img>
      </div>
      <div className="get-help-header-div">
        <h1 className="get-help-header">Get Help</h1>
      </div>

      <StyleD delay={0.1}>
        <ToggleCardGeneral cardTitle={"Using a Foodbank"}>
          <D>
            <p>
              Life is unpredictable, and everyone faces unexpected challenges.
              We know it can be hard to ask for help. It absolutely shouldn't
              be; regardless, it can be. <br />
              <br />
              Foodbanks rely on the support of their local communities to
              support people in crisis, which is why they are often best placed
              to help you in your area.
            </p>
          </D>
        </ToggleCardGeneral>
      </StyleD>
      <StyleD delay={0.2}>
        <ToggleCardGeneral cardTitle={"Eligibility & Referrals"}>
          <D>
            <p>
              It is important that getting help when needed is not difficult.
              With that being said, the topic of eligibility for food support is
              unfortunately not entirely straightforward as rules differ
              depending on location. <br />
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
              Tell the Citizens Advice staff that you need a food bank. They
              will try to make you an appointment so you can discuss your
              situation with one of their advisers.
            </p>
          </D>
        </ToggleCardGeneral>
      </StyleD>
      <StyleD delay={0.3}>
        <ToggleCardGeneral cardTitle={"What Do You Need?"}>
          <D>
            <p>You will want to have the following information ready: </p>
            <ul>
              <li>- Your name & address</li>
              <li>- Your telephone number</li>
              <li>- Your number of people in your household</li>
              <li>
                - Any specific dietary requirements (e.g. if you are a diabetic)
              </li>
              <li>- What cooking facilities you have</li>
              <li>
                - What day you need the food parcel for (i.e. on a Tuesday or
                Friday)
              </li>
            </ul>
          </D>
        </ToggleCardGeneral>
      </StyleD>
      <StyleD delay={0.4}>
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
              Foodbanks rely on the support of their local communities to
              support people in crisis, which is why they are often best placed
              to help you in your area.
            </p>
          </D>
        </ToggleCardGeneral>
      </StyleD>

      {foodBankData?.homepage ? (
        <StyleD delay={0.5}>
          <ToggleCardGeneral cardTitle={"Specific Information"}>
            <D>
              <p>
                The information on this page is currently quite generic due to
                all of the differing rules.{" "}
              </p>
              <p>
                At this time, for more specific information on your selected
                foodbank please see their website:{" "}
              </p>
              <a href={foodBankData.homepage}>{foodBankData.homepage}</a>
            </D>
          </ToggleCardGeneral>
        </StyleD>
      ) : null}
      <StyleD delay={0.6}>
        <Container foodBankData={foodBankData} />
      </StyleD>
    </div>
  );
};

export default GetHelp;
