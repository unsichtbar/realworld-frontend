import React from "react";
import logo from "./logo.svg";
import { Login } from "./pages/login/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Landing } from "./pages/landing/Landing";
import { ThemeProvider } from "./core/components/theme";
import { Register } from "./pages/register/Register";
import { Article } from "./pages/article/Article";
import { AuthenticationProvider } from "./core/auth/Authentication";
import { Navbar } from "./core/layout/Navbar";

function App() {
  return (
    <AuthenticationProvider>
      <ThemeProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/article/:id">
              <Article />
            </Route>
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
    </AuthenticationProvider>
  );
}

export default App;
