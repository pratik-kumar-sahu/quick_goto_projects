import React, { useContext } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  return user ? (
    <div className="card">
      <img className="card-img" src={user?.user?.photoURL} alt="user-pic" />
      <h3>Welcome</h3>
      <h2>{user?.user?.displayName}</h2>
      <p>
        Email: <strong>{user?.user?.email}</strong>
      </p>
      <Link to="/">
        <button>Go Home</button>
      </Link>
    </div>
  ) : (
    <Redirect to="/login" />
  );
}

export default Profile;
