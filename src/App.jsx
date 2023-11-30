// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./components/Home";
import Football from "./components/Football"
import Fone from "./components/F1"
import Golf from "./components/Golf"
import Nba from "./components/Nba"
import Ufc from "./components/Ufc"
import Swimming from "./components/Swimming";

const App = () => {
  return (
    <>
    
      <Navbar/>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route path="/home" Component={Home}/>
        <Route path="/football" Component={Football}/>
        <Route path="/f1" Component={Fone}/>
        <Route path="/golf" Component={Golf}/>
        <Route path="/nba" Component={Nba}/>
        <Route path="/ufc" Component={Ufc}/>
        <Route path="/swimming" Component={Swimming}/>
      </Routes>
       
    </>
  );
};

export default App;