import { combineReducers } from "redux";
import loginReducer from "./auth/LoginReducer";
import signupReducer from "./auth/SignupReducer";
import detailsReducer from "./DetailsReducer";

const appReducer = combineReducers({
  loginReducer,
  signupReducer,
  detailsReducer
});

export default appReducer;
