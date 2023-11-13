import { createStore } from "redux";
import { cartReducer } from "./countReducer";

const store = createStore(cartReducer);

export default store;