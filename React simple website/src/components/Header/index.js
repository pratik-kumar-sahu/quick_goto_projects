import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div>
        <Link to="/home">
          <button className="header-links">Home</button>
        </Link>
        <Link to="/posts">
          <button className="header-links">Posts</button>
        </Link>
      </div>
      <Link to="/login">
        <button className="header-login">LogIn</button>
      </Link>
    </div>
  );
}

export default Header;
