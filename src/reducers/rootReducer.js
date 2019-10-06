import { combineReducers } from "redux";
import calcReducer from "./calcReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  calc: calcReducer,
  theme: themeReducer
});

export default rootReducer