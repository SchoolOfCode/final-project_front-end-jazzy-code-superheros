// import EligibilityCard from "./EligibilityCard";
import ToggleCard from "./ToggleCard";
// import ToggleCardKids from "./ToggleCardChildren";
import "./style.css";

const getHelpData = [
  {
    cardTitle: "Using a foodbank",
    cardBody:
      "Life is unpredictable, and everyone faces unexpected challenges. We know it can be hard to ask for help. It absolutely shouldn't be; regardless, it can be. There are over 2500 foodbanks which are there to act as a support for anyone to lean on when times are tough. Asking for a hand when difficulties arise will not be met with judgement, stigma or pity - these organisations are run with the aim of building a kinder community that checks that nobody is left behind.",
  },
  {
    cardTitle: "Eligibility & Referrals",
    cardBody:
      "It is important that getting help when needed is not difficult. With that being said, the topic of eligibility for food support is unfortunately not entirely straightforward as rules differ depending on location. If you are in urgent need of assistance please contact your local community foodbank directly. Even if they are not able to accommodate you, they will be best placed to help relieve the immediate pressure. Otherwise, as a rule, you will need someone to provide a referral. For example: a charity, GP, or social worker. One of the easiest ways to ask for a referral (which we would recommend), regardless of your location, is to contact your [nearest Citizens Advice office](https://www.citizensadvice.org.uk/about-us/contact-us/contact-us/search-for-your-local-citizens-advice/). Tell the Citizens Advice staff that you need a food bank. They will try to make you an appointment so you can discuss your situation with one of their advisers.",
  },
  {
    cardTitle: "What do you need",
    cardBody:
      "You will want to have the following information ready: Your name, Your address, Your telephone number, The number of people in your household, Any specific dietary requirements (e.g. if you are a diabetic), What cooking facilities you have, What day you need the food parcel for (i.e. on a Tuesday or Friday).",
  },

  {
    cardTitle: "Additional support",
    cardBody: `Hunger is a critical need. But asometimes there are other issues which cause distress in our lives. Foodbanks will often offer additional support. This could include things like debt advice, mental health support, or benefits guidance. Foodbanks rely on the support of their local communities to support people in crisis, which is why they are often best placed to help you in your area.`,
  },
  {
    cardTitle: "Specific Information",
    cardBody:
      "The information on this page is currently quite generic due to all of the differing rules. At this time, for more specific information on your selected foodbank please see their website below: ",
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
      <img
        className="mapImage"
        src="https://www.givefood.org.uk/needs/at/vauxhall/map.png"
        alt="map location"
      />
    </div>
  );
};

export default GetHelp;
