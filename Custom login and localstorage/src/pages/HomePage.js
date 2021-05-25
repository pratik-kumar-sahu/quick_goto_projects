import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { auth } from "../firebase";

function HomePage() {
  const { user, dispatch } = useContext(UserContext);

  const logoutUser = () => {
    auth.signOut().then(() => {
      dispatch({
        type: "LOGOUT",
      });
    });
  };

  return (
    <div>
      <Link to="/profile">
        <button>Go to Profile</button>
      </Link>
      {user ? (
        <button onClick={logoutUser}>Logout</button>
      ) : (
        <>
          <Link to="/login">
            <button>LogIn</button>
          </Link>
          <Link to="/signup">
            <button>SignUp</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default HomePage;
