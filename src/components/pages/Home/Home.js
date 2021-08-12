import React from "react";
// import Main from "../../Main/main";
// import SignUp from "../SignUp";
import "./Home.css";
import { Button } from "antd";
import { routes } from "../../../routes.js";
import { Link } from "react-router-dom";
import Footer from "../../Footer/index";
import SignUp from "../SignUp";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="MEMORY">MEMORY GAME</div>

        <div>
          <Link className="lgn" to={routes.home}>
            <Button type="text">Home</Button>
          </Link>
          <Link className="lgn" to={routes.login}>
            <Button type="text">Log in</Button>
          </Link>
          <Link to={routes.sign_up}>
            <Button>Sign up</Button>
          </Link>
        </div>
      </div>

      <div className="container">
        <h3>Добро пожаловать!!! </h3>
        <p>
          Для перехода игры сначала необходима зарегистрироваться >>>
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
            <div>
              {/* <img src="https://cdn1.vectorstock.com/i/1000x1000/69/55/memory-card-game-with-cartoon-dogs-different-vector-20966955.jpg" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
