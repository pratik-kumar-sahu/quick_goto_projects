import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
import { UserContext } from "../contexts/UserContext";
import { auth } from "../firebase";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { user, dispatch } = useContext(UserContext);

  const submitHandler = (e) => {
    e.preventDefault();
    if (email.trim() && password.trim() && name.trim()) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          res = auth.currentUser;
          res.updateProfile({
            displayName: name,
            photoURL: `https://ui-avatars.com/api/?name=${name}`,
          });

          dispatch({
            type: "VERIFY_USER",
            user: res,
          });
        })
        .catch((err) => console.log(err));
    }
    setEmail("");
    setPassword("");
    setName("");
  };

  return (
    <>
      <div>
        <h3>SignUp</h3>
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
      {user && <Redirect to="/" />}
    </>
  );
}

export default Signup;
