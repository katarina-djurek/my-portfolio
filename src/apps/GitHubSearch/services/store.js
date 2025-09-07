import { configureStore } from "@reduxjs/toolkit";
import githubUserDataReducer from "../features/githubUserDataSlice";

export const store = configureStore({
  reducer: {
    githubUserData: githubUserDataReducer,
  },
});
