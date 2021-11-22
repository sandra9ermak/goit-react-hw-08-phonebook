import PropTypes from "prop-types";
import styles from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/contacts-operations";
import { getVisibleContacts } from "../../redux/contacts/contacts-selectors";

import { useDispatch, useSelector } from "react-redux";

const Contact = () => {
  const dispatch = useDispatch();

  const filtedContacts = useSelector(getVisibleContacts);

  return (
    <ul className={styles.contactList}>
      {filtedContacts.map((item) => (
        <li key={item.id} className={styles.contactItem}>
          <span className={styles.spanName}>{item.name}</span>
          <span className={styles.spanNumber}>{item.number}</span>
          <button
            type="submit"
            onClick={() => dispatch(deleteContact(item.id))}
            className={styles.contactButton}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Contact;

Contact.propTypes = {
  filtedContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
