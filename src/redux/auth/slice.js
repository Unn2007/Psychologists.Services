import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    refreshToken: null,
    tokenExpiresAt: null,
  },
  reducers: {
    updateTokens(state, action) {
      
      state.token = action.payload.idToken;
      state.refreshToken = action.payload.refreshToken;
      state.tokenExpiresAt = action.payload.expiresAt;
    },
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user.name = action.payload.displayName;
        state.user.email = action.payload.email;
        state.token = action.payload.idToken;
        state.refreshToken = action.payload.refreshToken;
        state.tokenExpiresAt = action.payload.expiresIn;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user.name = action.payload.displayName;
        state.user.email = action.payload.email;
        state.token = action.payload.idToken;
        state.refreshToken = action.payload.refreshToken;
        state.tokenExpiresAt = action.payload.expiresIn;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.refreshToken = null;
        state.tokenExpiresAt = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
       
        state.user.name = action.payload.users[0].displayName;
        state.user.email = action.payload.users[0].email;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
export const {
  updateTokens,
  
} = authSlice.actions;