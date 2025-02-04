// import { createSelector } from "@reduxjs/toolkit";
// import { selectNameFilter } from "../filters/selectors";

export const selectPsychologists = (state) => state.psychologists.items;

export const selectIsLoading = (state) => state.psychologists.loading;
export const selectLastKey = (state) => state.psychologists.lastKey;
// export const selectConfirmModal = (state) => state.contacts.isConfirmModal;
// export const selectEditModal = (state) => state.contacts.isEditModal.id;
// export const selectEditedContactData = (state) => state.contacts.isEditModal;
// export const selectError = (state) => state.contacts.error;

// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectNameFilter],
//   (contacts, searchField) => {
//     return contacts.filter(({ name, number }) =>
//       (name + number).toLowerCase().includes(searchField.toLowerCase())
//     );
//   }
// );
