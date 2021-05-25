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
      localStorage.removeItem("CurrentUser");
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
      <div style={{ marginTop: "2rem" }}>
        <li>After user sign-in only, data gets stored in localStorage</li>
        <li>Profile is accessible only if user is signed in</li>
        <li>User's data gets removed from localStorage on Logout</li>
        <li>Use Dummy credentials 👇 or SignUp</li>
        <li>
          Email: <strong>hermoine@gmail.com</strong> and Password:{" "}
          <strong>hermoine@123</strong>
        </li>
        <li>
          Email: <strong>ron@gmail.com</strong> and Password:{" "}
          <strong>ron@123</strong>
        </li>
        <li>
          Email: <strong>rachel@gmail.com</strong> and Password:{" "}
          <strong>rachel@123</strong>
        </li>
      </div>
    </div>
  );
}

export default HomePage;
