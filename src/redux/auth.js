import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../api/base";

export const registration = createAsyncThunk(
  "auth/registration",
  async (payload, { rejectWithValue }) => {
    try {
      const { user } = payload;
      const res = await axios.post("/users", user);

      if (res.status !== 201) {
        throw new Error("Сұраныста қателік бар!");
      }

      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      console.log(payload);
      const { user } = payload;
      const res = await axios.get("/users", user);

      if (res.status !== 200) {
        throw new Error("Аккаунтқа кіруде қателік бар!");
      }

      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  user: null,
  role: null,
  isLoggedIn: false,
  token: null,
  error: null,
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //Role
    setRole: (state, action) => {
      state.role = action.payload;
    },

    //Logout
    setLogout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.role = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registration.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.error = action.payload;
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        state.error = null;
      });

    builder
      .addCase(login.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
        state.error = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        state.error = null;
      });
  },
});

export const { setRole, setLogout } = auth.actions;

export default auth.reducer;
