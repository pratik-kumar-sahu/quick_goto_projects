import React from "react";
import { Link } from "react-router-dom";
import { auth, provider } from "../firebase";

function HomePage({ user, setUser }) {
  const logoutUser = () => {
    window.location.reload();
  };

  const signIn = () => {
    auth.signInWithPopup(provider).then((res) => setUser(res.user));
  };

  return (
    <div>
      <Link to="/profile">
        <button style={{ cursor: "pointer" }}>Go to Profile</button>
      </Link>
      {user ? (
        <button style={{ cursor: "pointer" }} onClick={logoutUser}>
          Logout
        </button>
      ) : (
        <button style={{ cursor: "pointer" }} onClick={signIn}>
          SignIn with Google
        </button>
      )}
    </div>
  );
}

export default HomePage;
