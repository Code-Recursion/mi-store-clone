import React from "react";
import Offer from "./components/Offer.jsx";
import '../styles/offers.css'

function Offers({ offer }) {
  return (
    <div>
      <div className="offerSection">
        {offer.map((item, key) => (
          <Offer
            key={item.image}
            index={key}
            src={item.image}
            link={item.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Offers;
