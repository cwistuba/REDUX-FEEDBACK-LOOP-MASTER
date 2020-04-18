import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

const feelingReducer = (state = {}, action) => {
  if (action.type === "SET_FEELING_SCORE") {
    return { ...action.payload };
  }
  return state;
};

const understandReducer = (state = {}, action) => {
  if (action.type === "SET_UNDERSTAND_SCORE") {
    return { ...action.payload };
  }
  return state;
};

const supportedReducer = (state = {}, action) => {
  if (action.type === "SET_SUPPORT_SCORE") {
    return { ...action.payload };
  }
  return state;
};

const commentsReducer = (state = {}, action) => {
  if (action.type === "SET_COMMENT_INPUT") {
    return { ...action.payload };
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    feelingReducer,
    understandReducer,
    supportedReducer,
    commentsReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
