import React from "react";
import { Route } from "react-router-dom";

export const AuthLayout = ({ component: Component }) => {
  return (
    <Route>
      <Component />
    </Route>
  );
};
