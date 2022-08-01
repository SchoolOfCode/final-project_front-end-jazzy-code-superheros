//this import no longer required unless we add
//more functionality - remove once dev complete
// import {useState, useEffect} from 'react'

import AboutUs from "../About";
import Button from "../Button";
import Carousel from "../Carousel/Carousel";
import { CarouselData } from "../Carousel/CarouselData";
import Facts from "../Facts/facts";
import InputFoodBank from "../Input/Input";
import "./style.css";

const Home = ({ foodBankData, handleChange, handleClick, handleEnter }) => {
  return (
    <div className="Home">
      <InputFoodBank handleChange={handleChange} handleClick={handleClick} handleEnter={handleEnter}/>
      <h1> {foodBankData ? foodBankData.name : null} </h1>
      <div className="ButtonContainer">
        <Button nameButton="Get Help" />
        <Button nameButton="Give Help" />
      </div>
      <AboutUs foodBankData={foodBankData} />
      <Carousel slides={CarouselData} />
      <Facts />
    </div>
  );
};

export default Home;
