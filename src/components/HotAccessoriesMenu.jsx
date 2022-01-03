import React from "react";
import { Link } from "react-router-dom";
import "../styles/HotAccessoriesMenu.css";
function HotAccessoriesMenu() {
  return (
    <div className="HotAccessoriesMenu">
      <Link to="/music" className="HotAccessorieLinks">
        Music Store
      </Link>
      <Link to="/smartDevice" className="HotAccessorieLinks">
        Smart Devices
      </Link>
      <Link to="/home" className="HotAccessorieLinks">
        Home
      </Link>
      <Link to="/lifeStyle" className="HotAccessorieLinks">
        LifeStyle
      </Link>
      <Link to="/mobileAccessories" className="HotAccessorieLinks">
        Mobile Accessories
      </Link>
    </div>
  );
}

export default HotAccessoriesMenu;
