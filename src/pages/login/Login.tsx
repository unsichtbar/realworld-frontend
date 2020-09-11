import * as React from "react";

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

export const Login: React.FC<{}> = (props) => {
  const [username, setUsername] = React.useState<FormValue>(createFormValue());
  const [password, setPassword] = React.useState<FormValue>(createFormValue);
  const [submitted, setSubmitted] = React.useState<boolean>(false);

  function onUsernameChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setUsername(newFormValue(e.target.value));
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
      alert("loggin you in wowee");
    }
  }

  return (
    <div>
      <form>
        <span>
          <input
            type="text"
            value={username.value}
            name="username"
            placeholder="Username"
            onChange={onUsernameChange}
          ></input>
          {submitted && username.errors}
        </span>
        <span>
          <input
            type="password"
            value={password.value}
            name="password"
            placeholder="Password"
            onChange={onPasswordChange}
          ></input>
          {submitted && password.errors}
        </span>
        <button type="submit" onClick={submitForm}>
          Login
        </button>
      </form>
    </div>
  );
};
