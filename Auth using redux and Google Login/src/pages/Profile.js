import React from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

function Profile({ user }) {
  return user ? (
    <div className="card">
      <img className="card-img" src={user?.photoURL} alt="user-pic" />
      <h3>Welcome</h3>
      <h2>{user?.displayName}</h2>
      <p>
        Email: <strong>{user?.email}</strong>
      </p>
      <Link to="/">
        <button style={{ cursor: "pointer" }}>Go Home</button>
      </Link>
    </div>
  ) : (
    <Redirect to="/" />
  );
}

export default Profile;
