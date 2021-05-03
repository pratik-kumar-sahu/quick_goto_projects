import React from "react";
import "./RegisteredUser.css";
import Infinity from "./Infinity.svg";

function RegisteredUser(props) {
  return (
    <div className="container">
      {props.loading ? (
        <div className="img">
          <img src={Infinity} alt="loading..." />
        </div>
      ) : props.data ? (
        <>
          <div>
            Welcome <span className="wlcm-user">{props.data.userName}</span>
          </div>
          <div>{props.data.greet}</div>
        </>
      ) : (
        <div>No Registered Users</div>
      )}
    </div>
  );
}

export default RegisteredUser;
