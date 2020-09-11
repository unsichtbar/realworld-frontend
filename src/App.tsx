import React from 'react';
import logo from './logo.svg';
import {Login} from './pages/login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { Landing } from './pages/landing';

function App() {
  return (
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
  );
}

export default App;
