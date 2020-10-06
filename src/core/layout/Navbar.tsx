import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useUser } from "../auth/Authentication";

export const Navbar: React.FC<{}> = (props) => {
  const { user } = useUser();
  return (
    <NavbarStyled>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1em",
        }}
      >
        <span>
          <Link to="/">Home</Link>
        </span>
        <span
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "10em",
          }}
        >
          <span>
            <Link to={user ? "/logout" : "/login"}>
              {user ? "Logout" : "Login"}
            </Link>
          </span>
          <span>{!user && <Link to="/register">Register</Link>}</span>
        </span>
      </div>
    </NavbarStyled>
  );
};

const NavbarStyled = styled.nav`
  background-color: ${(props) => props.theme.primary};
`;
