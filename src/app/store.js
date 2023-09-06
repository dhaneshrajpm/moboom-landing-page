import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from "../pages/Home/HomeSlice";

export const store = configureStore({
  reducer: {
    home: HomeReducer
  }
})