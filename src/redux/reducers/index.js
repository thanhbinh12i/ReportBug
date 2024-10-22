import {combineReducers} from "redux";
import loginReducer from "./login";
import { ProjectCategoryReducer } from "./ProjectCategoryReducer";

const allReducers = combineReducers({
      loginReducer,
      ProjectCategoryReducer
})

export default allReducers;