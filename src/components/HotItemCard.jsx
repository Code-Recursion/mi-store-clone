import React from "react";
import '../styles/HotItemCard.css'
function HotItemCard({ image, name, price, index }) {
  return (
    <div className="HotItemCard">
      <img src={image} alt={`product ${index}`} />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  );
}

export default HotItemCard;
