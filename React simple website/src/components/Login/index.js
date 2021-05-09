import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [status, setStatus] = useState(false);

  const clickHandler = (e) => {
    e.preventDefault();
    if (email && password && !errorEmail && !errorPassword) {
      console.log({
        email,
        password,
      });
      setEmail("");
      setPassword("");
      setStatus(true);
    } else if (!email) {
      setErrorEmail("Input field cannot be empty");
    } else if (!password) {
      setErrorPassword("Input field cannot be empty");
    } else {
      console.log("error occured");
    }
  };

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const val = value.trim();

    setStatus(false);

    if (name === "email") {
      setEmail(val);
      if (!val) {
        setErrorEmail("Input field cannot be empty");
      } else if (!val.includes("@") || !val.includes(".")) {
        setErrorEmail("email must contain @ and . symbols");
      } else {
        setErrorEmail("");
      }
    }

    if (name === "password") {
      setPassword(val);
      if (!val) {
        setErrorPassword("Input field cannot be empty");
      } else if (val.length < 6) {
        setErrorPassword("password must be minimum 6 characters long");
      } else {
        setErrorPassword("");
      }
    }
  };

  return (
    <div className="login">
      <form className="form">
        <input
          name="email"
          type="email"
          className="form-input"
          value={email}
          placeholder="Enter email"
          onChange={changeHandler}
          autoFocus
        />
        {errorEmail ? <div className="error">{errorEmail}</div> : null}
        <input
          name="password"
          type="password"
          className="form-input"
          value={password}
          placeholder="Enter password"
          onChange={changeHandler}
        />
        {errorPassword ? <div className="error">{errorPassword}</div> : null}
        <input
          type="submit"
          value="Submit"
          className="form-submit"
          onClick={clickHandler}
        />
        {status ? <div className="success">Logged in successfully</div> : null}
      </form>
    </div>
  );
}

export default Login;
