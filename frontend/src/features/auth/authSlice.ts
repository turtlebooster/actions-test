import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import Axios from "../../utils/Axios";

export interface AuthState {
  userEmail: String;
  status: "idle" | "loading" | "failed";
}

interface UserInfo {
  email: String;
  password: String;
}

const initialState: AuthState = {
  userEmail: "",
  status: "idle",
};

export const emailCheck = createAsyncThunk(
  "auth/emailCheck",
  async (email: String, { rejectWithValue }) => {
    try {
      const response = await Axios.get(`/email/${email}`);
      return response;
    } catch (error) {
      console.log(error);
      return rejectWithValue(String(error));
    }
  }
);

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (params: UserInfo, { rejectWithValue }) => {
    try {
      const response = await Axios.post("/signup", params);
      return response;
    } catch (error) {
      console.log(error);
      return rejectWithValue(String(error));
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (params: UserInfo, { rejectWithValue }) => {
    try {
      const response = await Axios.post("/login", params);
      return response;
    } catch (error) {
      console.log(error);
      return rejectWithValue(String(error));
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.userEmail = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(emailCheck.pending, (state) => {
        state.status = "loading";
      })
      .addCase(emailCheck.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.status = "idle";
      })
      .addCase(emailCheck.rejected, (state, { payload }) => {
        console.log(payload);
        state.status = "failed";
      })
      .addCase(signUp.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.status = "idle";
      })
      .addCase(signUp.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.status = "idle";
        state.userEmail = payload.data; // 형태 정해야 함
      })
      .addCase(login.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { logout } = authSlice.actions;
export const selectUserEmail = (state: RootState) => state.auth.userEmail;

export default authSlice.reducer;
