import "./App.css";

import { Nav } from "./Components/Nav";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

//this import no longer required unless we add
//more functionality - remove once dev complete
import { useState } from "react";

//custom hooks
import {useFetch} from './hooks/useFetch'

//components
import Home from "./Components/Home";
import GetHelp from "./Components/GetHelp";
import GiveHelp from "./Components/GiveHelp";

function App() {

  const foodbankName = 'vauxhall'

  const rootUrl = `https://www.givefood.org.uk/api/2/foodbank/`

  const url = `${rootUrl}${foodbankName}/`

  //Fetch hook to request the data from the API
  const foodBankData = useFetch(url) 

  //dev feedback only remove
  console.log(`foodBankData state >>>`, foodBankData)

  return (
    <div className="App">
      <Nav />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home foodBankData={foodBankData}/>}></Route>
          <Route path="/gethelp" element={<GetHelp />}></Route>
          <Route path="/givehelp" element={<GiveHelp foodBankData={foodBankData}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
