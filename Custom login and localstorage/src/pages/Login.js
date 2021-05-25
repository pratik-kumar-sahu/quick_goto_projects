import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, dispatch } = useContext(UserContext);

  const submitHandler = (e) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          console.log(res.user);
          dispatch({
            type: "VERIFY_USER",
            user: res.user,
          });
          localStorage.setItem("CurrentUser", JSON.stringify(res.user));
        })
        .catch((err) => console.log(err));
    }
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div>
        <h3>LogIn</h3>
        <form onSubmit={submitHandler}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      {user && <Redirect to="/" />}
    </>
  );
}

export default Login;
