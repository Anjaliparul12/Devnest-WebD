import {createStore} from "redux";
import { userformReducer } from "./redux/userform/userformReducer";

const store = createStore(userformReducer);

export default store;