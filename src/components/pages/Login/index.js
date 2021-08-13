import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
// import { routes } from "../../routes";
import { useDispatch, useSelector } from "react-redux";
import { login_user } from "../../store/actions";

import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const success = useSelector((state) => state.success);
  const localUsers = useSelector((state) => state.localUsers);

  const [inEmail, setInEmail] = useState("");
  const [inPassword, setInPassword] = useState("");

  const history = useHistory();

  if (success) {
    history.push("./main");
  }
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your email..."
          value={inEmail}
          onChange={(e) => setInEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
          value={inPassword}
          onChange={(e) => setInPassword(e.target.value)}
        />
        <button
          className="loginButton"
          onClick={() => {
            dispatch(login_user({ inEmail, inPassword }));
          }}
        >
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="Link" to="/home">
          home
        </Link>
      </button>
    </div>
  );
};
export default Login;
