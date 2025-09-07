import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  todolist: todoReducer,
});

export default rootReducer;
