// import Footer from "../../../components/Footer/index";
import React from "react";
import { Route } from "react-router-dom";
// import Header from "../../Header/index";
// import Home from "../../pages/Home/Home";
// import Main from "../../Main/main";
// import { Footer } from '../../components/Footer'

export const HomeLayout = ({ component: Component }) => {
  return (
    <Route>
      {/* <Home /> */}

      <Component />
      {/* <Main /> */}

      {/* <Footer /> */}

      {/* <Footer /> */}
    </Route>
  );
};
