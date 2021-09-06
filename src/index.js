import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import  './asset/style.css'
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
const rootReducer = combineReducers({});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
