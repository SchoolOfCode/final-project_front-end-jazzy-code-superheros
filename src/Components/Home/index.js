import AboutUs from "../About";
import Button from "../Button";
import "./style.css"

const Home = () => {
  return(
    <div className="Home">
      <div className="ButtonContainer">
      <Button nameButton="Get Help"/>
      <Button nameButton="Give Help"/>
      </div>
      <AboutUs/>
    </div>
  
  );
};

export default Home;
