import { applyMiddleware, createStore } from "redux";
import reduxLogger from "redux-logger";
import GithubReducer from "./reducers/GithubReducer";

const store = createStore(GithubReducer, applyMiddleware(reduxLogger));

export default store;
