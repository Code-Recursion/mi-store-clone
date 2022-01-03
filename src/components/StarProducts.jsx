import React from "react";
import '../styles/startProduct.css'
function StarProducts({ starProducts }) {
  return (
    <div className="startProduct">
      <div>
        <a href={starProducts[0].url}>
          <img src={starProducts[0].image} alt="starProducts" />
        </a>
      </div>
      <div>
        <a href={starProducts[1].url}>
          <img src={starProducts[1].image} alt="starProducts" />
        </a>
        <a href={starProducts[2].url}>
          <img src={starProducts[2].image} alt="starProducts" />
        </a>
       <div>
       <a href={starProducts[3].url}>
          <img src={starProducts[3].image} alt="starProducts" />
        </a>
       </div>
      </div>
    </div>
  );
}

export default StarProducts;
