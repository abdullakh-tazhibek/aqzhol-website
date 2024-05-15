import { configureStore } from "@reduxjs/toolkit";
import auth from "../redux/auth";

export const store = configureStore({
  reducer: {
    auth,
  },
});
