import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import firebase from "firebase";
import "semantic-ui-css/semantic.min.css";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import config from "./firebase_config.json";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import rootReducer from "./rootReducer";
import { getAuthState } from "./actions/auth";

firebase.initializeApp(config);

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(getAuthState);

// FIREBASE FIX
// When app already loaded, but firebase not, getAuthState fired with null value.
// More info here: https://firebase.google.com/docs/auth/web/start#set_an_authentication_state_observer_and_get_user_data
// So I setup user global default value is null (user not loaded)
// , but when he's auth state is unauthorized (firebase checks localStorage and not found any entries) it changes to {}
// see actions/auth.js 18:64 for details
function waitForFirebaseInit() {
  return new Promise(resolve => {
    store.subscribe(() => {
      if (store.getState().user !== null) resolve();
    });
  });
}

waitForFirebaseInit().then(() => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <Route component={App} />
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
  registerServiceWorker();
});
