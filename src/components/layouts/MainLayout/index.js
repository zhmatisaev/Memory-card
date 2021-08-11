import React from "react";
import { Route } from "react-router-dom";
// import Header from "../../Header/index";
import Main from "../../Main/main";
// import { Footer } from '../../components/Footer'

export const MainLayout = ({ component: Component }) => {
  return (
    <Route>
      {/* <Header /> */}
      <Component />
      <Main />
      {/* <Footer /> */}
    </Route>
  );
};
