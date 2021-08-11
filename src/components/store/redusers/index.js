import { ADD_USER, LOGIN_USER } from "../actions";

const local = JSON.parse(localStorage.getItem("users"));

const initialState = {
  localUsers: local ? local.localUsers : [],
  currentUser: local ? local.currentUser : {},
  success: false,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      let isLogin = state.localUsers.findIndex(
        (el) => el.userEmail === action.user.userEmail
      );
      if (isLogin === -1) {
        return {
          ...state,
          localUsers: [...state.localUsers, action.user],
          currentUser: action.user,
          success: true,
        };
      } else {
        return state;
      }
    case LOGIN_USER:
      let inUser = state.localUsers.find(
        (el) =>
          el.userEmail === action.obj.inEmail &&
          el.userPassword === action.obj.inPassword
      );
      if (inUser) {
        return {
          ...state,
          currentUser: inUser,
          success: true,
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};
