export const ADD_USER = "ADD_USER";
export const LOGIN_USER = "LOGIN_USER";

export const add_user = (user) => ({
  type: ADD_USER,
  user,
});

export const login_user = (obj) => ({
  type: LOGIN_USER,
  obj,
});
