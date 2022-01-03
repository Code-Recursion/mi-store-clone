import React from "react";
import { Link } from "react-router-dom";
import "../styles/HotAccessoriesMenu.css";
function HotAccessoriesMenu() {
  return (
    <div className="HotAccessoriesMenu">
      <Link to="/musicstore" className="HotAccessorieLinks">
        Music Store
      </Link>
      <Link to="/smartdevices" className="HotAccessorieLinks">
        Smart Devices
      </Link>
      <Link to="/home" className="HotAccessorieLinks">
        Home
      </Link>
      <Link to="/lifestyle" className="HotAccessorieLinks">
        LifeStyle
      </Link>
      <Link to="/mobileaccessories" className="HotAccessorieLinks">
        Mobile Accessories
      </Link>
    </div>
  );
}

export default HotAccessoriesMenu;
