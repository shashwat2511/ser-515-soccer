import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from "history";
import { createStore } from 'redux'
import createRootReducer from "./root_reducer"
import { applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import { AppRouter } from './AppRouter';

const assembleMiddleware = (history) => {
  const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
  return composeEnhancers(applyMiddleware(ReduxThunk, routerMiddleware(history)));
};

const createAppStore = (history) => {
  return createStore(createRootReducer(history), {}, assembleMiddleware(history))
}

function main() {
  const history = createBrowserHistory()
  const store = createAppStore(history)
  const root = document.getElementById('root')
  ReactDOM.render(React.createElement(AppRouter, {history, store},null), root)
}

document.addEventListener("DOMContentLoaded", () => main())

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
