import Form from "../components/Form/Form";
import Filter from "../components/Filter/Filter";
import Contact from "../components/Contact/Contact";
import s from "./Views.module.css";
import { fetchContacts } from "../redux/contacts/contacts-operations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const ContactsView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  });

  return (
    <div className={s.section}>
      <Form />
      <Filter />
      <Contact />
    </div>
  );
};

export default ContactsView;
