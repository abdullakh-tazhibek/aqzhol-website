import { configureStore } from "@reduxjs/toolkit";
import auth from "../redux/auth";
import { rememberReducer, rememberEnhancer } from "redux-remember";

const rememberedKeys = ["auth"];

export const store = configureStore({
  reducer: rememberReducer({
    auth,
  }),
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers().concat(
      rememberEnhancer(window.localStorage, rememberedKeys)
    ),
});
