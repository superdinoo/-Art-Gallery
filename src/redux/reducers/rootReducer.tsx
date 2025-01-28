import { combineReducers } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import paginationSlice from "./paginationSlice";
import mainLightSlice from "./mainLight";
import searchSlice from "./searchSlice";

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  pagination: paginationSlice,
  mainLight: mainLightSlice,
  search: searchSlice,
});

export default rootReducer;
