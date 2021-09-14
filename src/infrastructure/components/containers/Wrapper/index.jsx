import React from "react";
import { useHistory } from "react-router";
import { ButtonPrimary } from "../../ui/Buttons";
import "./style.css";

export const Wrapper = ({ children }) => {
  const router = useHistory();

  return (
    <div className="wrapper">
      <div className="wrapper__shop">
        <ButtonPrimary
          text="Ir al carrito"
          click={() => router.push("/cart")}
        />
      </div>
      <p className="wrapper__title">Intech Keola</p>
      {children}
    </div>
  );
};

export const WrapperShop = ({ children }) => {
  const router = useHistory();

  return (
    <div className="wrapper">
      <div className="wrapper__shop">
        <ButtonPrimary text="Ir a productos" click={() => router.push("/")} />
      </div>
      <p className="wrapper__title">Intech Keola Shop</p>
      {children}
    </div>
  );
};

export const WrapperProducts = ({ children }) => {
  return <div className="wrapper-product">{children}</div>;
};
