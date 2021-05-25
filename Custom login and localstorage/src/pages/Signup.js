import React, { useState } from "react";
import { auth } from "../firebase";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (email.trim() && password.trim() && name.trim()) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          if (res) {
            res = auth.currentUser;
            res.updateProfile({
              displayName: name,
              photoURL: `https://ui-avatars.com/api/?name=${name}`,
            });
          }
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
    setEmail("");
    setPassword("");
    setName("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
          required
        />
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

export default Signup;
