import React from "react";
import "./style.css";

const ShopProduct = ({ ...item }) => {
  return (
    <div className="container-shop">
      <div className="container-shop__img">
        <img src={item.strDrinkThumb} height="100%" alt={item.strDrink} />
      </div>
      <div className="container-shop__description">
        <p className="container__name">{item.strDrink}</p>
        <p className="container__price">s/{item.price}</p>
      </div>
    </div>
  );
};

export default ShopProduct;
