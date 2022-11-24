import React from "react"; //Needed for nodejs v.16

import "./App.css";
import { useState } from "react";
import Login from "./modules/authentication/components/login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./modules/navbar/component/Header";

function App() {
  
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
