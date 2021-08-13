import React from "react";
import "./Home.css";
import { Button } from "antd";
import { routes } from "../../../routes.js";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="memory">MEMORY GAME</div>

        <div>
          <Link className="lgn" to={routes.home}>
            <Button type="text">Home</Button>
          </Link>
          <Link className="lgn" to={routes.login}>
            <Button type="text">Log in</Button>
          </Link>
          <Link className="lgn" to={routes.sign_up}>
            <Button>Sign up</Button>
          </Link>
        </div>
      </div>

      <div className="container">
        <h3>Welcome!!! </h3>
        <p>
          To go to the game, you first need to register --->
          <Link className="lgnn" to={routes.sign_up}>
            <span type="text"> Sign Up</span>
          </Link>
        </p>
        <div className="bg_home">
          <div>
            <img
              className="homeImg"
              src="https://i.ytimg.com/vi/o5zxnhMurxo/maxresdefault.jpg"
            />
            <div />
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
