import "./App.css";
import styles from "../components/Form/Form.module.css";
import ContactsView from "../views/ContactsView";
import NavBar from "../components/Navigation/NavBar";
import RegistrationView from "../views/RegistrationView";
import LoginView from "../views/LoginView";
import HomeView from "../views/HomeView";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { authOperations } from "../redux/auth";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>
        <Route path="/register">
          <RegistrationView />
        </Route>
        <Route path="/login">
          <LoginView />
        </Route>
        <Route path="/contacts">
          <ContactsView />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
