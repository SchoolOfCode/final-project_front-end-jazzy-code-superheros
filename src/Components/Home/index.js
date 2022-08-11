//this import no longer required unless we add
//more functionality - remove once dev complete
// import {useState, useEffect} from 'react'

import AboutUs from "../About";
import Button from "../Button";
import Carousel from "../Carousel/Carousel";
import { CarouselData } from "../Carousel/CarouselData";
import Facts from "../Facts/facts";
import vegetables from "../../img/vegetables.jpg";

import "./style.css";

import { useNavigate } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

const Home = ({ foodBankData, handleChange, handleClick, handleEnter }) => {
  const navigate = useNavigate();

  return (
    <div className="Home">
      <ScrollToTop></ScrollToTop>
      <div id="home-page-flex-div">
        <div className="half-page">
          <img className="ImgAboutUs" src={vegetables} alt="vegetables" />
        </div>
        <div className="half-page">
          <AboutUs foodBankData={foodBankData} />
        </div>
      </div>

      {/* <h2>Your Support is Really Powerful.</h2> */}
      <div className="ButtonContainer">
        <Button
          nameButton="Get Help"
          onClick={() => {
            navigate("/gethelp");
          }}
        />
        <Button
          nameButton="Give Help"
          onClick={() => {
            navigate("/givehelp");
          }}
        />
      </div>

      <Carousel slides={CarouselData} />
      <Facts />
    </div>
  );
};

export default Home;
