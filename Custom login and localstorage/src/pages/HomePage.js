import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { auth } from "../firebase";

function HomePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { user, dispatch } = useContext(UserContext);

  const logoutUser = () => {
    auth.signOut().then(() => {
      dispatch({
        type: "LOGOUT",
      });
      localStorage.removeItem("CurrentUser");
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (email.trim() && password.trim() && name.trim()) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          res = auth.currentUser;
          res.updateProfile({
            displayName: name,
            photoURL: `https://ui-avatars.com/api/?name=${name}`,
          });

          dispatch({
            type: "VERIFY_USER",
            user: res,
          });
        })
        .catch((err) => console.log(err));
    }
    setEmail("");
    setPassword("");
    setName("");
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
          {/* <Link to="/signup">
            <button>SignUp</button>
          </Link> */}
          <button
            type="button"
            class="btn"
            data-toggle="modal"
            data-target="#myModal"
          >
            SignUp
          </button>

          <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                  <h4 class="modal-title">SignUp</h4>
                </div>
                <div class="modal-body">
                  <div>
                    <form onSubmit={submitHandler}>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Name"
                        required
                      />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        required
                      />
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        required
                      />
                      <button type="submit">Submit</button>
                    </form>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
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
