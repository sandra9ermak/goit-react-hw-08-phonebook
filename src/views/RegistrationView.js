import styles from "./Views.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";

const RegistrationView = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <h1 className={styles.mainTitle}>SignUp Form</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.labelInput}>
          <h3 className={styles.title}>Name</h3>
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            placeholder="Name"
            required
          />
        </label>
        <label className={styles.labelInput}>
          <h3 className={styles.title}>Email</h3>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Email"
            required
          />
        </label>
        <label className={styles.labelInput}>
          <h3 className={styles.title}>Login</h3>
          <input
            className={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            placeholder="Login"
            required
          />
        </label>
        <button className={styles.buttonForm} type="submit">
          Sign up
        </button>
      </form>
    </>
  );
};

export default RegistrationView;
