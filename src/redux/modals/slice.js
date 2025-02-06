import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modals",
  initialState: {
    registerIsOpen: false,
    loginIsOpen: false,
    appointmentIsOpen:false,
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
    openAppointmentModal: (state) => {
      state.appointmentIsOpen = true;
    },
    closeAppointmentModal: (state) => {
      state.appointmentIsOpen = false; 
    },

  },
});

export const { openRegisterModal, closeRegisterModal,openLoginModal,closeLoginModal,closeAppointmentModal,openAppointmentModal } = modalSlice.actions;
export default modalSlice.reducer;
   