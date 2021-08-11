import React from "react";
// import Main from "../../Main/main";
// import SignUp from "../SignUp";
import "./Home.css";
import { Button } from "antd";
import { routes } from "../../../routes.js";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="home">
        <div>
          <Link className="lgn" to={routes.home}>
            <Button type="text">Home</Button>
          </Link>
          {/* <h1>Memory Game</h1> */}
          <Link className="lgn" to={routes.login}>
            <Button type="text">Log in</Button>
          </Link>
          <Link to={routes.sign_up}>
            <Button>Sign up</Button>
          </Link>
        </div>
      </div>

      {/* <Main /> */}
      {/* <SignUp /> */}
    </>
  );
};
export default Home;
