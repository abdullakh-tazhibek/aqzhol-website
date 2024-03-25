import { combineReducers } from "redux";
import { login } from "./login";
import { role } from "./role";

export const rootReducer = combineReducers({
  login,
  role,
});
