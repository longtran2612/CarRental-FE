import { configureStore } from "@reduxjs/toolkit";
import global from "./globalSlice";
const rootReducer ={
  global,
  
}
export default configureStore({
  reducer: rootReducer,
});