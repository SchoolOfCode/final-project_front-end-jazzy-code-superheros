import {useState, useEffect} from 'react'
import AboutUs from "../About";
import Button from "../Button";
import Carousel from '../Carousel/Carousel';
import { CarouselData } from '../Carousel/CarouselData';
import Facts from '../Facts/facts';
import "./style.css"



const Home = () => {
  
  //This use state is being used to get the data fetched from the foodbank API
  const [foodBankData, setFoodBankData] = useState()

   
  const foodbankName = 'vauxhall'

  let url = `https://www.givefood.org.uk/api/2/foodbank/`


  //Fetch request to request the data from the API
  const getFoodBank = async ()=> {

  const response = await fetch(`${url}${foodbankName}/`)

  const data = await response.json();

  //dev feedback only remove
  console.log(`data in func >>>`, data)

  setFoodBankData(data)

  }
  //Render the data with the home page
  useEffect(()=> {
    getFoodBank()

}, [])

  //dev feedback only remove
  console.log(`foodBankData state >>>`, foodBankData)

  return(
    <div className="Home">
   <h1> {foodBankData ? foodBankData.name : null} </h1>
     <div className="ButtonContainer">
      <Button nameButton="Get Help"/>
      <Button nameButton="Give Help"/>
      </div>
      <AboutUs
        foodBankData={foodBankData} /> 
      <Carousel slides={CarouselData}/> 
       <Facts/>  
    </div> 
  
  );
};

export default Home;
