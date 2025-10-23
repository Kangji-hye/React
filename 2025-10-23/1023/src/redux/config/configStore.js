import { combineReducers, createStore } from "redux";
import counter from "../modules/counter";

//1. rootReducer 만들어라
const rootReducer = combineReducers({ counter });

//2. store 생성
const store = createStore(rootReducer);

//3. store 내보내라
export default store;