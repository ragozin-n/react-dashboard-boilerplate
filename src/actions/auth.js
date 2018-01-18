import firebase from "firebase";
import { USER_LOGGED_IN, AUTH_STATE_CHANGED } from "./types";
import api from "../api";

const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

const authStateChanged = user => ({
  type: AUTH_STATE_CHANGED,
  user
});

export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => dispatch(userLoggedIn(user)));

export const getAuthState = dispatch =>
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      return dispatch(authStateChanged(user));
    }
    return dispatch(authStateChanged(null));
  });
