import axios from "axios";
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  deleteContactRequest,
  deleteContactError,
  deleteContactSuccess,
  filteredContactsRequest,
  filteredContactsSuccess,
  filteredContactsError,
} from "./contacts-action";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const addContact = (name, number) => (dispatch) => {
  const contact = { name, number };

  dispatch(addContactRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error)));
};

export const deleteContact = (contactId) => (dispatch) => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch((error) => dispatch(deleteContactError(error)));
};

export const fetchContacts = () => (dispatch) => {
  dispatch(filteredContactsRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(filteredContactsSuccess(data)))
    .catch((error) => dispatch(filteredContactsError(error)));
};
