// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Football from "./pages/Football";
import Cricket from "./pages/Cricket";
import Golf from "./pages/Golf";
import Nba from "./pages/Nba";
import Ufc from "./pages/Ufc";
import Swimming from "./pages/Swimming";
import Layout from "./layout/RootLayout";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route exact path="/" element={<Home />} />
      <Route path="/football" element={<Football />} />
      <Route path="/cricket" element={<Cricket />} />
      <Route path="/golf" element={<Golf />} />
      <Route path="/nba" element={<Nba />} />
      <Route path="/ufc" element={<Ufc />} />
      <Route path="/swimming" element={<Swimming />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
