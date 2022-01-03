import React from "react";
import "../styles/ProductReviews.css";

function ProductReview({ productReviews }) {
  return (
    <div className="ProductReviews">
      {productReviews.map((product, index) => (
        <div key={index}>
          <a href={product}>
            <img src={product.image} alt="test" />
            <div>
              <p>{product.review}</p>
              <span>{product.name}</span>
              <span>{product.price}</span>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default ProductReview;
