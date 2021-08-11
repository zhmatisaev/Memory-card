import React from "react";
import { Route } from "react-router-dom";
import Header from "../../Header/index";

export const AuthLayout = ({ component: Component }) => {
  return (
    <Route>
      {/* <Header /> */}
      <Component />
    </Route>
  );
};
