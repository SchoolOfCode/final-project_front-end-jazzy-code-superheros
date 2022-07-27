import {useState, useEffect} from 'react'


import AboutUs from "../About";
import Button from "../Button";
import "./style.css"



const Home = () => {

  const [foodBankData, setFoodBankData] = useState()

  const foodbankName = 'vauxhall'

  let url = `https://www.givefood.org.uk/api/2/foodbank/`

  const getFoodBank = async ()=> {

  const response = await fetch(`${url}${foodbankName}/`)

  const data = await response.json();

  //dev feedback only remove
  console.log(`data in func >>>`, data)

  setFoodBankData(data)

  }

  useEffect(()=> {
    getFoodBank()

}, [])

  //dev feedback only remove
  console.log(`foodBankData state >>>`, foodBankData)

  return(
    <div className="Home">
      <div className="ButtonContainer">
      <Button nameButton="Get Help"/>
      <Button nameButton="Give Help"/>
      </div>
      <AboutUs
        foodBankData={foodBankData}
      />
    </div>
  
  );
};

export default Home;
