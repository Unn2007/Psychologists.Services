import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import  {refreshIdToken} from '../../utils/refreshIdToken.js'
import { signOut } from "firebase/auth";
import {auth} from '../../utils/firebaseAuth.js'
import {updateTokens} from './slice.js';

const API_KEY = import.meta.env.VITE_API_KEY;

// axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]";
//                           https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
//                           https://securetoken.googleapis.com/v1/token?key=[API_KEY]

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const url=`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
      const res = await axios.post(url, {"returnSecureToken":true,...credentials});

      setAuthHeader(res.data.idToken);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const url=` https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
      const res = await axios.post(url, {"returnSecureToken":true,...credentials});

      setAuthHeader(res.data.idToken);
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await signOut(auth);
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/current",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    const persistedRefreshToken = state.auth.refreshToken; 
      const tokenExpiresAt = state.auth.tokenExpiresAt; 

    if (!persistedToken || !persistedRefreshToken) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      let idToken = persistedToken;
      if (Date.now() >= tokenExpiresAt) {
        const refreshedTokens = await refreshIdToken(persistedRefreshToken);

        idToken = refreshedTokens.idToken;

        
        thunkAPI.dispatch(updateTokens(refreshedTokens));
      }
      setAuthHeader(idToken);
      const urlUser=`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${API_KEY}`;
      const body={"idToken":idToken}
      const res = await axios.post(urlUser,body);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
