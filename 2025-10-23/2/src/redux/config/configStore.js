import { combineReducers, createStore } from "redux";
import todos from "../modules/todo";

//1. rootReducer 만들어라
const rootReducer = combineReducers({ todos });

//2. store 생성
const store = createStore(rootReducer);

//3. store 내보내라
export default store;