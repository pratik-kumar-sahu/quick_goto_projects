import { createStore, compose } from "react-redux";
import userReducer from "../reducers/userReducer";

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(userReducer, composer());

export default store;
