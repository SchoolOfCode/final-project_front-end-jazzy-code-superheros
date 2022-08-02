import "./App.css";

import { Nav } from "./Components/Nav";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//this import no longer required unless we add
//more functionality - remove once dev complete
import { useState } from "react";

//custom hooks
import { useFetch } from "./hooks/useFetch";

//components
import Home from "./Components/Home";
import GetHelp from "./Components/GetHelp";
import GiveHelp from "./Components/GiveHelp";
import Footer from "./Components/Footer/footer";
import LandingPage from "./Components/LandingPage";

function App() {
  let [inputFoodBank, setInputFoodBank] = useState("waterloo");
  let [submitedBank, setSubmitedBank]= useState(inputFoodBank);

  function handleChange(e) {
    setInputFoodBank(e.target.value)
    
}


function handleEnter(e){
  if (e.key==="Enter"){
    e.preventDefault();
    const inputBox = document.getElementById('inputbox');

    setSubmitedBank(inputFoodBank);    
    // 👇️ clear input field
    inputBox.value = '';

    console.log(inputFoodBank)
  }
}


function handleClick(e){

    e.preventDefault();
    const inputBox = document.getElementById('inputbox');

    // Send value to server
    console.log(inputBox.value);

    setSubmitedBank(inputFoodBank);
    // 👇️ clear input field
    inputBox.value = '';
}


  const foodbankName = submitedBank;

  const rootUrl = `https://www.givefood.org.uk/api/2/foodbank/`;

  const url = `${rootUrl}${foodbankName}/`;

  //Fetch hook to request the data from the API
  const foodBankData = useFetch(url,foodbankName);

  //dev feedback only remove
  console.log(`foodBankData state >>>`, foodBankData);

  return (
    <div className="App">
      <Nav />
      <Router>
        <Routes>
          <Route path="/"
          element={<LandingPage handleChange={handleChange} handleClick={handleClick} handleEnter={handleEnter} />}
          ></Route>
          <Route
            exact
            path="/home"
            element={<Home foodBankData={foodBankData} handleChange={handleChange} handleClick={handleClick} handleEnter={handleEnter} />}
          ></Route>
          <Route path="/gethelp" element={<GetHelp />}></Route>
          <Route
            path="/givehelp"
            element={<GiveHelp foodBankData={foodBankData} />}
          ></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
