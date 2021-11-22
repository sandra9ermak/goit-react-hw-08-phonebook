import "./App.css";
import styles from "../components/Form/Form.module.css";
import Contact from "../components/Contact/Contact";
import Form from "../components/Form/Form";
import Filter from "../components/Filter/Filter";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/contacts-operations";
import { useDispatch } from "react-redux";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h1 className={styles.mainTitle}>Phonebook</h1>
        <Form />
        <h2 className={styles.mainTitle}>Contacts</h2>
        <Filter />
        <Contact />
      </div>
    </div>
  );
};

export default App;
