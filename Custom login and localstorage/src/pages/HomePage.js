import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Link to="/profile">
        <button>Go to Profile</button>
      </Link>
      <Link to="/login">
        <button>LogIn</button>
      </Link>
      <Link to="/signup">
        <button>SignUp</button>
      </Link>
    </div>
  );
}

export default HomePage;
