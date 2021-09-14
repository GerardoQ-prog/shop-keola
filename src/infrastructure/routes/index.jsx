import React from "react";
import { useQuery, useQueryClient } from "react-query";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Cart from "../views/Cart";
import Home from "../views/Home";

const AppRoutes = () => {
  const queryClient = useQueryClient();

  const productsShop = queryClient.getQueryData("cart");
  useQuery("cart", () => {
    return productsShop ? productsShop : [];
  });

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRoutes;
