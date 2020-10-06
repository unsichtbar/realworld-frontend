import React from "react";
import logo from "./logo.svg";
import { Login } from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./App.css";
import { Landing } from "./pages/landing/Landing";
import { ThemeProvider } from "./core/components/theme";
import { Register } from "./pages/register/Register";
import { Article } from "./pages/article/view/Article";
import { useUser, AuthenticationProvider } from "./core/auth/Authentication";
import { Navbar } from "./core/layout/Navbar";
import { CreateArticle } from "./pages/article/create/CreateArticle";
import { Profile } from "./pages/profile/Profile";
import { HttpClientProvider } from "./core/http/HttpClient";

function App() {
  return (
    <HttpClientProvider>
      <AuthenticationProvider>
        <ThemeProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/profile/:id">
                <Profile />
              </Route>
              <Route path="/article/create">
                <CreateArticle />
              </Route>
              <Route path="/article/:id">
                <Article />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/logout">
                <Logout />
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
    </HttpClientProvider>
  );
}

const Logout: React.FC<{}> = () => {
  const { setUser } = useUser();
  const [timedOut, setTimedout] = React.useState(false);

  setTimeout(() => {
    setTimedout(true);
    setUser(null);
  }, 2000);
  if (!timedOut)
    return <div>You will be logged out and redirected to the home page.</div>;
  return <Redirect to="/" />;
};

export default App;
