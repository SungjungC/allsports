import { createStore, applyMiddleware, compose, combineReducers } from "redux";
// import { composeWithDevTools } from "remote-redux-devtools";
import { composeWithDevTools } from "redux-devtools-extension";
import * as modules from "./modules";
import penderMiddleWare from "redux-pender";

const Reducers = combineReducers(modules);
const Middlewares = [penderMiddleWare()];
// window.__REDUX_DEVTOOLS_EXTENSION__ && Middlewares.push(window.__REDUX_DEVTOOLS_EXTENSION__())

const isDev = process.env.NODE_ENV === "development";
const devTools = isDev && composeWithDevTools({ realtime: true });
const composeEnhancers = devTools || compose;

const Enhancer = composeEnhancers(applyMiddleware(...Middlewares));
const configure = initialState => {
  const store = createStore(Reducers, initialState, Enhancer);
  // hot-reloading 를 위한 코드
  if (module.hot) {
    module.hot.accept("./modules", () => {
      const nextRootReducer = require("./modules").default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
};

export default configure;
