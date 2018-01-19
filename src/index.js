import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
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
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
  registerServiceWorker();
});
