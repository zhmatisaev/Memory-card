// import React from "react";
// import Avatar from "@material-ui/core/Avatar";
// import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export default function SignUp() {
//   const classes = useStyles();

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign up
//         </Typography>
//         <form className={classes.form} noValidate>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 autoComplete="fname"
//                 name="firstName"
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="firstName"
//                 label="First Name"
//                 autoFocus
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="lastName"
//                 label="Last Name"
//                 name="lastName"
//                 autoComplete="lname"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <FormControlLabel
//                 control={<Checkbox value="allowExtraEmails" color="primary" />}
//                 label="I want to receive inspiration, marketing promotions and updates via email."
//               />
//             </Grid>
//           </Grid>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Sign Up
//           </Button>
//           <Grid container justifyContent="flex-end">
//             <Grid item>
//               <Link href="#" variant="body2">
//                 Already have an account? Sign in
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//       <Box mt={5}>
//         <Copyright />
//       </Box>
//     </Container>
//   );
// }

import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./SignUp.css";
import { useHistory } from "react-router";
// import {routes} from '../../routes'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { add_user } from "../../store/actions";
// import validation from "./Validation";
// import { TextField } from "../../components/TextField";
// import { Input, Space } from "antd";
// import Home from "../Home/Home";
import "./SignUp.css";

const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    inEmail: "",
  });
  // const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const state = useSelector((state) => state);
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(state));
  }, [currentUser]);
  const history = useHistory();

  useEffect(() => {
    if (values.email.trim() && values.name.trim() && values.password.trim()) {
      localStorage.setItem("users", JSON.stringify(state));
      history.push("./home");
    }
  }, [state]);

  const onAdd = () => {
    //  (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value)
    // let checkEmail = /^([A-Za-z0-9_\-\.])+\@([gmail|GMAIL])+\.(com)$/;
    let checkEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (
      values.name !== "" &&
      checkEmail.test(values.email) &&
      values.password.length > 7
    ) {
      dispatch(
        add_user({
          firstName: values.name.split(" ")[0],
          lastName: values.name.split(" ")[1],
          userEmail: values.email,
          userPassword: values.password,
          id: Date.now().toString(),
          success: true,
        })
      );
    }
    // else {
    //   setErrors(validation(values));
    // }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        {/* name */}
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          name="name"
          placeholder="Enter your username..."
          value={values.name}
          onChange={handleChange}
        />
        {/* email */}
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          name="email"
          placeholder="Enter your email..."
          value={values.email}
          onChange={handleChange}
        />
        {/* password */}
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          name="password"
          placeholder="Enter your password..."
          value={values.password}
          onChange={handleChange}
        />
        <button
          className="registerButton"
          onClick={() => {
            onAdd();
          }}
        >
          Sign up
        </button>
      </form>

      <button className="registerLoginButton">
        <Link className="Link" to="/home">
          Home
        </Link>
      </button>
      {/* <button>
        <Link className="registerLoginButton" to="/home">
          Home
        </Link>
      </button> */}
    </div>
  );
};
export default SignUp;
