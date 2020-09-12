import React from "react";

import { useQuery, useMutation, queryCache } from "react-query";

import { postRegister } from "./api/register-api";
import { UserModel } from "../../models/UserModel";
import { Input } from "../../core/components/input/Input";
import { Button } from "../../core/components/button/Button";
import { AuthenticationContext } from "../../core/auth/Authentication";
interface FormValue {
  value: string;
  dirty: boolean;
  touched: boolean;
  errors?: string;
}

function createFormValue() {
  return {
    value: "",
    dirty: false,
    touched: false,
    errors: undefined,
  };
}

function newFormValue(value: string) {
  return {
    value,
    touched: true,
    dirty: true,
    errors: undefined,
  };
}

export const Register: React.FC<{}> = (props) => {
  const [username, setUsername] = React.useState<FormValue>(createFormValue());
  const [email, setEmail] = React.useState<FormValue>(createFormValue());

  const [password, setPassword] = React.useState<FormValue>(createFormValue);
  const [submitted, setSubmitted] = React.useState<boolean>(false);

  const { setUser } = React.useContext(AuthenticationContext);

  const [register] = useMutation(postRegister, {
    onSuccess: (user: UserModel) => {
      console.log(user);
      setUser(user);
    },
  });

  function onUsernameChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setUsername(newFormValue(e.target.value));
  }

  function onEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setEmail(newFormValue(e.target.value));
  }

  function onPasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setPassword(newFormValue(e.target.value));
  }

  function submitForm(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    setSubmitted(true);
    if (!username.value) {
      setUsername((username) => {
        return { ...username, errors: "Username is required" };
      });
    }
    if (!password.value) {
      setPassword((password) => {
        return { ...password, errors: "Password is required" };
      });
    }
    if (
      username.value &&
      password.value &&
      !username.errors &&
      !password.errors
    ) {
      register({
        username: username.value,
        email: email.value,
        password: password.value,
      });
    }
  }

  return (
    <div>
      <form>
        <span>
          <Input
            type="text"
            value={username.value}
            name="username"
            placeholder="Username"
            onChange={onUsernameChange}
          ></Input>
          {submitted && username.errors}
        </span>

        <span>
          <Input
            type="text"
            value={email.value}
            name="email"
            placeholder="Email"
            onChange={onEmailChange}
          ></Input>
          {submitted && email.errors}
        </span>
        <span>
          <Input
            type="password"
            value={password.value}
            name="password"
            placeholder="Password"
            onChange={onPasswordChange}
          ></Input>
          {submitted && password.errors}
        </span>
        <Button type="submit" onClick={submitForm}>
          Register
        </Button>
      </form>
    </div>
  );
};
