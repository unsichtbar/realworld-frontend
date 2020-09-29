import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../core/components/button/Button";
export const LoginRedirect: React.FC<any> = (props) => {
  return (
    <>
      <div>You must be logged in to do that!</div>
      <div>
        <Link to="/login">
          <Button>Click here to login</Button>
        </Link>
      </div>
    </>
  );
};
