import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("contacts")) || [];

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
      localStorage.setItem("contacts", JSON.stringify(state));
    },
    deleteContact(state, action) {
      const newState = state.filter((contact) => contact.id !== action.payload);
      localStorage.setItem("contacts", JSON.stringify(newState));
      return newState;
    },
    resetContacts() {
      localStorage.removeItem("contacts");
      return initialState; // Reset contacts to initial state
    },
  },
});

export const { addContact, deleteContact, resetContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
