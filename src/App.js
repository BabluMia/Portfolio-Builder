import "./App.css";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";

import Header from "./components/SideNav/Header";

function App() {
  const [bodyWidth, setBodyWidth] = useState(false);
  const [hideToolbar, setHideToolbar] = useState(false);
  return (
    <div>
      <Router>
        <div className={` ${!bodyWidth && !hideToolbar ? "main-content" : !hideToolbar ? "main-content-collapsed" : ""}`}>
          {!hideToolbar && <Header setBodyWidth={setBodyWidth} />}
          <div>
            <Switch>
              <Route exact path="/">
                <Landing setHideToolbar={setHideToolbar} />
              </Route>
              <Route exact path="/login">
                <Login setHideToolbar={setHideToolbar} />
              </Route>

              <Route exact path="/home">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
 