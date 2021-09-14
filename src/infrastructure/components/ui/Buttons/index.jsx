import React from "react";
import "./style.css";

export const ButtonPrimary = ({ text, click }) => {
  return (
    <div className="button__primary" onClick={click}>
      {text}
    </div>
  );
};
