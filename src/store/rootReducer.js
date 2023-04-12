import { combineReducers } from "@reduxjs/toolkit";

import initReducer from "./slices/init/init.slice";


const rootReducer = combineReducers({
  init: initReducer,
});

export default rootReducer;