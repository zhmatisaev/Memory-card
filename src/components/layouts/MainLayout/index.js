import React from "react";
import { Route } from "react-router-dom";
import Home from "../../pages/Home/Home";

export const MainLayout = ({ component: Component }) => {
  return (
    <Route>
      <Component />
    </Route>
  );
};
