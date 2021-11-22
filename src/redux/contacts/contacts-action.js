import { createAction } from "@reduxjs/toolkit";

export const addContactRequest = createAction("contact/addContactRequest");
export const addContactSuccess = createAction("contact/addContactSuccess");
export const addContactError = createAction("contact/addContactError");

export const deleteContactRequest = createAction(
  "contact/deleteContactRequest"
);
export const deleteContactSuccess = createAction(
  "contact/deleteContactSuccess"
);
export const deleteContactError = createAction("contact/deleteContactError");

export const filteredContactsRequest = createAction(
  "contact/filteredContactsRequest"
);
export const filteredContactsSuccess = createAction(
  "contact/filteredContactsSuccess"
);
export const filteredContactsError = createAction(
  "contact/filteredContactsError"
);
export const filteredContacts = createAction("contact/filter");
