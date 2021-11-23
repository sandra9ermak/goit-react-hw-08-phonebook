import styles from "./Views.module.css";
import { useState } from "react";
import { authOperations } from "../redux/auth";
import { useDispatch } from "react-redux";

const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    switch (name) {
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
    dispatch(authOperations.login({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <h1 className={styles.mainTitle}>Login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.labelInput}>
          <h3 className={styles.title}>Email</h3>
          <input
            className={styles.input}
            type="text"
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
          Login
        </button>
      </form>
    </>
  );
};

export default LoginView;
