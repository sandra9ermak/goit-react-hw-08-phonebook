import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Notiflix from "notiflix";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk(
  "auth/register",
  async (credentials, rejectWithValue) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      if (error.response.status === 400) {
        return rejectWithValue(Notiflix.Notify.failure("Enter valid data"));
      }
      return rejectWithValue(Notiflix.Notify.failure("Please try again"));
    }
  }
);

const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/login", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      if (error.response.status === 400) {
        return rejectWithValue(
          Notiflix.Notify.failure("Invalid data, please try again")
        );
      }
      return rejectWithValue(Notiflix.Notify.failure("Please try again"));
    }
  }
);

const logout = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {}
});

const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("user is logged out");
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      Notiflix.Notify.failure(error.message);
    }
  }
);

const authOperations = {
  register,
  login,
  logout,
  fetchCurrentUser,
};

export default authOperations;
