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
import ProductReview from "./components/ProductReview.jsx";
import Videos from "./components/Videos.jsx";

const App = () => {
  // const products = [
  //   { name: "music", path: "/music" },
  //   { name: "smartDevice", path: "/smartDevice" },
  //   { name: "home", path: "/home" },
  //   { name: "lifeStyle", path: "/lifeStyle" },
  //   { name: "mobileAccessories", path: "/mobileAccessories" },
  // ];
  // "smartDevice",
  // "home",
  // "lifeStyle",
  // "mobileAccessories",

  // const routes = [
  //   {
  //     path: "/",
  //     component: App,
  //   },
  //   {
  //     path: "/Teachers",
  //     component: TeacherListPage,
  //   },
  //   {
  //     path: "/Teachers/",
  //     component: TeacherPage,
  //   },
  //   {
  //     path: "/Teachers/:teacherId/Classes",
  //     component: TaughtClassesPage,
  //   },
  // ];

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

      {/* {products.map((item, key) => (
        <p key={key}>{item.name}</p>
      ))} */}

      {/* check what you are rendering inside hotaccessories */}
      {/* wherwe is the data?? */}

      {/* <Routes>
        {products.map(({ name, path }, idx) => (
          <Route
            key={idx}
            exact
            path={path}
            element={
              <HotAccessories
                product={data.hotAccessories.name}
                productCover={data.hotAccessoriesCover.name}
              />
            }
          ></Route>
        ))}
      </Routes> */}

      <Routes>
        <Route
          exact
          path="/"
          element={
            <HotAccessories
              product={data.hotAccessories.music}
              productCover={data.hotAccessoriesCover.music}
            />
          }
        ></Route>
        <Route
          exact
          path="/music"
          element={
            <HotAccessories
              product={data.hotAccessories.music}
              productCover={data.hotAccessoriesCover.music}
            />
          }
        ></Route>
        <Route
          exact
          path="/smartDevice"
          element={
            <HotAccessories
              product={data.hotAccessories.smartDevice}
              productCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        ></Route>
        <Route
          exact
          path="/home"
          element={
            <HotAccessories
              product={data.hotAccessories.home}
              productCover={data.hotAccessoriesCover.home}
            />
          }
        ></Route>
        <Route
          exact
          path="/lifeStyle"
          element={
            <HotAccessories
              product={data.hotAccessories.lifeStyle}
              productCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        ></Route>
        <Route
          exact
          path="/mobileAccessories"
          element={
            <HotAccessories
              product={data.hotAccessories.mobileAccessories}
              productCover={data.hotAccessoriesCover.mobileAccessories}
            />
          }
        ></Route>
      </Routes>

      <Heading text="PRODUCT REVIEWS" />
      <ProductReview productReviews={data.productReviews} />
      <Heading text="VIDEOS" />
      <Videos videos={data.videos} />
      {/* <Heading text="IN THE PRESS" /> */}
    </Router>
  );
};

export default App;
