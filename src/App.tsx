import React from "react";
import logo from "./logo.svg";
import { Login } from "./pages/login/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Landing } from "./pages/landing/Landing";
import { ThemeProvider } from "./core/components/theme";
import { Register } from "./pages/register/Register";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <div>
              <Landing />
            </div>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
