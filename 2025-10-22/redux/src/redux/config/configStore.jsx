// src/redux/config/configStore.js
import { createStore, combineReducers } from "redux";
import counter from "../modules/counter";

const rootReducer = combineReducers({
  counter, // counter: counter 와 동일
});

const store = createStore(rootReducer);
export default store;