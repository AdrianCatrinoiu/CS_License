import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/createStore";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import "./input.css";
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
import { Helmet } from "react-helmet";

Kommunicate.init("12fe8796000bf5a4f00d46fe7e7d545ff");
ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Nortec Noir</title>
    </Helmet>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
