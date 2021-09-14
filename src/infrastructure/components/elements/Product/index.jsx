import React from "react";
import { useQueryClient } from "react-query";
import { addProductCart } from "../../../../domain/services/Products.services";
import { ButtonPrimary } from "../../ui/Buttons";
import "./style.css";

const Product = ({ ...item }) => {
  const queryClient = useQueryClient();
  const handleUpdate = () => addProductCart(queryClient, item);

  return (
    <div className="container">
      <img src={item.strDrinkThumb} width="100%" alt={item.strDrink} />
      <p className="container__name">{item.strDrink}</p>
      <p className="container__price">s/{item.price}</p>
      <ButtonPrimary text="Agregar" click={handleUpdate} />
    </div>
  );
};

export default Product;
