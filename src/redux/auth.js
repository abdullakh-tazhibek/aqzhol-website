import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../api/base";

export const authUser = createAsyncThunk(
  "fetch/authUser",
  async (payload, { rejectWithValue }) => {
    try {
      const { user } = payload;
      const res = await axios.post("/users", user);

      if (res.status !== 201) {
        throw new Error("Сұраныста қателік бар!");
      }

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
  user: {
    role: null,
    country: "KZ",
    phoneNumber: null,
    name: null,
    email: null,
    messenger: null,
  },

  status: "Idle",
  error: null,
  token: null,
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //Role
    setRole: (state, action) => {
      state.user.role = action.payload;
    },

    //Registration
    setCountry: (state, action) => {
      state.user.country = action.payload;
    },
    setPhoneNum: (state, action) => {
      state.user.phoneNumber = action.payload;
    },
    setName: (state, action) => {
      state.user.name = action.payload;
    },
    setEmail: (state, action) => {
      state.user.email = action.payload;
    },
    setMessenger: (state, action) => {
      state.user.messenger = action.payload;
    },

    //Logout
    setLogout: (state) => {
      state.user.role = null;
      state.user.country = null;
      state.user.phoneNumber = null;
      state.user.name = null;
      state.user.email = null;
      state.user.messenger = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authUser.pending, (state) => {
      state.status = "loading";
      state.error = null;
      state.token = null;
    });
    builder.addCase(authUser.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });
    builder.addCase(authUser.fulfilled, (state, action) => {
      state.status = "connected";
      state.user = action.payload.user;
      state.token = action.payload.accessToken;
    });
  },
});

export const {
  setRole,
  setCountry,
  setPhoneNum,
  setEmail,
  setMessenger,
  setName,
  setLogout,
} = auth.actions;

export default auth.reducer;
