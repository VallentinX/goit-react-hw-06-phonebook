import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      return state.filter((contact) => contact.id !== action.payload);
    },
    resetContacts(state) {
      return initialState; // Reset contacts to initial state
    },
  },
});

export const { addContact, deleteContact, resetContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
