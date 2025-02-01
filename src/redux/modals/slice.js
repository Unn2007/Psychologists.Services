import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modals",
  initialState: {
    registerIsOpen: false,
    loginIsOpen: false,
  },
  reducers: {
    openRegisterModal: (state) => {
      state.registerIsOpen = true;
    },
    closeRegisterModal: (state) => {
      state.registerIsOpen = false; 
    },
    openLoginModal: (state) => {
      state.loginIsOpen = true;
    },
    closeLoginModal: (state) => {
      state.loginIsOpen = false; 
    },

  },
});

export const { openRegisterModal, closeRegisterModal,openLoginModal,closeLoginModal } = modalSlice.actions;
export default modalSlice.reducer;
   