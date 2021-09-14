import React from "react";
import { useQueryClient } from "react-query";
import { priceTotalProducts } from "../../domain/services/Products.services";
import { WrapperShop } from "../components/containers/Wrapper";
import ShopProduct from "../components/elements/ShopProduct";

const Cart = () => {
  const queryClient = useQueryClient();

  const products = queryClient.getQueryData("cart");

  return (
    <WrapperShop>
      {products && products.length === 0 && <h1>No existen productos</h1>}
      {products &&
        products.map((item, index) => {
          return <ShopProduct key={index} {...item} />;
        })}
      {products && products.length > 0 && (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ fontSize: 20, fontWeight: 700 }}>Total</p>
          <p style={{ fontSize: 20, fontWeight: 700 }}>
            s/{products ? priceTotalProducts(products) : 0}
          </p>
        </div>
      )}
    </WrapperShop>
  );
};

export default Cart;
