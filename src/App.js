import { useState } from "react";

import "./App.css";

import { Nav } from "./Components/Nav";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./Components/Home";
import GetHelp from "./Components/GetHelp";
import GiveHelp from "./Components/GiveHelp";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/gethelp" element={<GetHelp />}></Route>
          <Route path="/givehelp" element={<GiveHelp />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
