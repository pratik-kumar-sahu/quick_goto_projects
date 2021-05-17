import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>Home Route</div>
      <Link to="/products">Go to Products route</Link>
    </>
  );
}

export default Home;
