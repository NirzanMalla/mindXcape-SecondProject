// eslint-disable-next-line no-unused-vars
import React from "react";
import { 
  Route, 
  RouterProvider, 
  createBrowserRouter,
  createRoutesFromElements,
 } from "react-router-dom";
import Home from "./components/Home";
import Football from "./components/Football"
import Fone from "./components/F1"
import Golf from "./components/Golf"
import Nba from "./components/Nba"
import Ufc from "./components/Ufc"
import Swimming from "./components/Swimming";
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/football" element={<Football/>}/>
        <Route path="/f1" element={<Fone/>}/>
        <Route path="/golf" element={<Golf/>}/>
        <Route path="/nba" element={<Nba/>}/>
        <Route path="/ufc" element={<Ufc/>}/>
        <Route path="/swimming" element={<Swimming/>}/>
      </Route>
  )
)

const App = () => {
  return (
    
      <RouterProvider router={router}/>
    
  );
};

export default App;