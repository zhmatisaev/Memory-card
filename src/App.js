import SignUp from "../src/components/pages/SignUp/index";
import Home from "./components/pages/Home/Home.js";
import Login from "../src/components/pages/Login/index";
import Main from "./components/Main/main.js";

import { AuthLayout } from "./components/layouts/AuthLayout/index";
import { MainLayout } from "./components/layouts/MainLayout/index";
// import "./styles.css";

import { routes } from "./routes";
import { BrowserRouter, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const App = () => {
  // const currentUser = true;
  const state = useSelector((state) => state);
  const currentUser = useSelector((state) => state.currentUser);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(state));
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(state));
  }, [currentUser]);
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <AuthLayout path={routes.login} component={Login} />
          <AuthLayout path={routes.sign_up} component={SignUp} />
          <AuthLayout path={routes.main} component={Main} />
          <MainLayout path={routes.home} component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
