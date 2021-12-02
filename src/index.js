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
import provinceReducers from "./redux/reducers/province";
import busesReducers from "./redux/reducers/busesReducer";
import authReducers from "./redux/reducers/auth";
import userReducers from "./redux/reducers/user";
import roleReducers from "./redux/reducers/permission";
import newsReducers from "./redux/reducers/news";
const rootReducer = combineReducers({
  province : provinceReducers,
  buses : busesReducers,
  auth : authReducers,
  users : userReducers,
  role : roleReducers,
  news : newsReducers
});
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
