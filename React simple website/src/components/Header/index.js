import React from "react";

function Header() {
  return (
    <div className="header">
      <div>
        <button className="header-links">Home</button>
        <button className="header-links">Posts</button>
      </div>
      <button className="header-login">LogIn</button>
    </div>
  );
}

export default Header;
