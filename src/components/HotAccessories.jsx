import React from "react";
import HotItemCard from "../components/HotItemCard.jsx";
import "../styles/HotAccessories.css";
function HotAccessories({ music, musicCover }) {
  return (
    <div className="HotAccessories">
      <div>
        <img src={musicCover} alt="" />
      </div>
      <div className="HotAccessoriesCard">
        {music.map((item, index) => (
          <HotItemCard
            key={index}
            name={item.name}
            price={item.price}
            image={item.image}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default HotAccessories;
