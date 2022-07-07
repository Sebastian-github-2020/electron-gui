import {createStore} from "redux";
import UserReducer from "./reducers";

const store = createStore(UserReducer)

export default store