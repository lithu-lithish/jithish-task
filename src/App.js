import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Airfreight from "./pages/Airfreight";
import Automotive from "./pages/Automotive";
import Bulkcargo from "./pages/Bulkcargo";
import Contact from "./pages/Contact";
import CustomerRel from "./pages/CustomerRel";
import Fashion from "./pages/Fashion";
import Food from "./pages/Food";
import Industries from "./pages/Industries";
import LandTransport from "./pages/LandTransport";
import Manufacturing from "./pages/Manufacturing";
import Minerals from "./pages/Minerals";
import Ocean from "./pages/Ocean";
import Oil from "./pages/Oil";
import Pharma from "./pages/Pharma";
import ProjCargo from "./pages/ProjCargo";
import Retail from "./pages/Retail";
import Services from "./pages/Services";
import ShipConsol from "./pages/ShipConsol";
import ShipCharter from "./pages/ShipCharter";
import Tech from "./pages/Tech";
import WareHouse from "./pages/WareHouse";

import { BrowserRouter, Routes, Route } from "react-router-dom";
AOS.init();
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <div className="App">
            <Home />
          </div> */}
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="/about">
            <Route index element={<About />} />
          </Route>
          <Route path="/airfreight">
            <Route index element={<Airfreight />} />
          </Route>
          <Route path="/automotive">
            <Route index element={<Automotive />} />
          </Route>
          <Route path="/blog">
            <Route index element={<Blog />} />
          </Route>
          <Route path="/bulkcargo">
            <Route index element={<Bulkcargo />} />
          </Route>
          <Route path="/contact">
            <Route index element={<Contact />} />
          </Route>
          <Route path="/customerRel">
            <Route index element={<CustomerRel />} />
          </Route>
          <Route path="/fashion">
            <Route index element={<Fashion />} />
          </Route>
          <Route path="/food">
            <Route index element={<Food />} />
          </Route>
          <Route path="/industries">
            <Route index element={<Industries />} />
          </Route>

          <Route path="/minerals">
            <Route index element={<Minerals />} />
          </Route>
          <Route path="/manufacturing">
            <Route index element={<Manufacturing />} />
          </Route>
          <Route path="/landtransport">
            <Route index element={<LandTransport />} />
          </Route>

          <Route path="/ocean">
            <Route index element={<Ocean />} />
          </Route>
          <Route path="/oil">
            <Route index element={<Oil />} />
          </Route>
          <Route path="/pharma">
            <Route index element={<Pharma />} />
          </Route>

          <Route path="/projcargo">
            <Route index element={<ProjCargo />} />
          </Route>
          <Route path="/retail">
            <Route index element={<Retail />} />
          </Route>
          <Route path="/services">
            <Route index element={<Services />} />
          </Route>
          <Route path="/shipconsol">
            <Route index element={<ShipConsol />} />
          </Route>
          <Route path="/shipcharter">
            <Route index element={<ShipCharter />} />
          </Route>

          <Route path="/tech">
            <Route index element={<Tech />} />
          </Route>
          <Route path="/warehouse">
            <Route index element={<WareHouse />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
