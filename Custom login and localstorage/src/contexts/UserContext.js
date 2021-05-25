import React, { createContext, useReducer } from "react";
import userReducer from "../reducers/userReducer";

export const UserContext = createContext();

function UserContextProvider(props) {
  const [user, dispatch] = useReducer(userReducer, null, () => {
    const localData = localStorage.getItem("CurrentUser");
    const data = { user: localData ? JSON.parse(localData) : null };
    return data.user ? { user: data.user } : null;
  });

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
