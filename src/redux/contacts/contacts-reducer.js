import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  filteredContacts,
  addContactSuccess,
  deleteContactSuccess,
  filteredContactsSuccess,
} from "./contacts-action";

const contacts = {
  filter: "",
  items: [],
};

const reducerContacts = createReducer(contacts.items, {
  [filteredContactsSuccess]: (_, action) => action.payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter((item) => item.id !== payload),
});

const reducerFilter = createReducer(contacts.filter, {
  [filteredContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  items: reducerContacts,
  filter: reducerFilter,
});
