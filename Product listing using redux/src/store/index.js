import { createStore, compose, applyMiddleware } from "redux";
import thunk from "../middlewares/thunk";
import reducer from "../reducers";

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk];

const store = createStore(reducer, composer(applyMiddleware(...middlewares)));

export default store;
