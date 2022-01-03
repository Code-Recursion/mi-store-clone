import "./App.css";
import React from "react";
import PreNavBar from "./components/PreNavBar";
import NavBar from "./components/NavBar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Slider from "./components/Slider.jsx";
import data from "./data/data.json";
import Offers from "./components/Offers.jsx";
import Heading from "./components/Heading.jsx";
import StarProducts from "./components/StarProducts.jsx";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.jsx";
import HotAccessories from "./components/HotAccessories.jsx";

const App = () => {
  return (
    <Router>
      <PreNavBar />
      <NavBar />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />

      <Heading text="STAR PRODUCTS" />
      <StarProducts starProducts={data.starProduct} />

      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
        <Route
          exact
          path="/musicstore"
          element={
            <HotAccessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        ></Route>
      </Routes>

      <Heading text="PRODUCT REVIEWS" />

      <Heading text="VIDEOS" />

      <Heading text="IN THE PRESS" />
    </Router>
  );
};

export default App;
