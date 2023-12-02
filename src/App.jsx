// eslint-disable-next-line no-unused-vars
import React from "react";
import { 
  Route, 
  RouterProvider, 
  createBrowserRouter,
  createRoutesFromElements,
 } from "react-router-dom";
import Home from "./pages/Home";
import Football from "./pages/Football"
import Fone from "./pages/F1"
import Golf from "./pages/Golf"
import Nba from "./pages/Nba"
import Ufc from "./pages/Ufc"
import Swimming from "./pages/Swimming";
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