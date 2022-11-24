import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/css/styles.css";
import "./assets/css/index.css";
import "./assets/css/animation.css";
import "./assets/css/humburger.css";
import "./assets/css/navbar.css";
import "./assets/css/animation.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store from "./_redux/Store/Store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store()}>
      <Router>
        <App />

        <div class="area">
          <App />

          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <ToastContainer />
      </Router>
    </Provider>
  </>
);

reportWebVitals();
