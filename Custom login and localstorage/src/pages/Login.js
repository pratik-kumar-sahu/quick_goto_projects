import React, { useState } from "react";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((res) => console.log(res.user))
        .catch((err) => console.log(err));
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div>
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
  );
}

export default Login;
