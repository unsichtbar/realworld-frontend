import React from "react";
import { Link } from "react-router-dom";
import { AuthenticationContext } from "../auth/Authentication";

export const Navbar: React.FC<{}> = (props) => {
  const user = React.useContext(AuthenticationContext);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={user ? "/logout" : "/login"}>
            {user ? "Logout" : "Login"}
          </Link>
        </li>
        {!user && (
          <li>
            <Link to="/register">Register</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
