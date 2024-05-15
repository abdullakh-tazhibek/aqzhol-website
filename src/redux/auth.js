import { createSlice } from "@reduxjs/toolkit";
import axios from "../api/base";

const EMAIL_REGEX = /^[^ ]+@[^ ]+\.[a-z]{2,5}$/;
const PWD_REGEX = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/;

const initialState = {
  role: "",
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { setRole } = auth.actions;

export default auth.reducer;
