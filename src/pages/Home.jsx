import React from "react";
import "./home.css";
const Home = ({ title, brand, price, images }) => {
  return (
    <div className="product-item">
      {/* Code here */}
      <div className="products">
        <div className="red">
          <img
            src={images[0]}
            alt="img-1"
            style={{ height: "150px", width: "200px" }}
          />
          <h3>{title}</h3>
          <h3>Price: {price} Rs</h3>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
