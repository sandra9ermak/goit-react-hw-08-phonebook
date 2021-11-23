import "./App.css";
import styles from "../components/Form/Form.module.css";
import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import NavBar from "../components/Navigation/NavBar";
import PrivateRoute from "../components/Navigation/PrivateRoute";
import PublicRoute from "../components/Navigation/PublicRoute";
import { authOperations } from "../redux/auth";

const HomeView = lazy(() =>
  import("../views/HomeView" /* webpackChunkName: "HomePage" */)
);
const AddContactView = lazy(() =>
  import("../views/AddContactView" /* webpackChunkName: "AddContact" */)
);
const LoginView = lazy(() =>
  import("../views/LoginView" /* webpackChunkName: "Login" */)
);
const RegistrationView = lazy(() =>
  import("../views/RegistrationView" /* webpackChunkName: "Registration" */)
);
const ContactsView = lazy(() =>
  import("../views/ContactsView" /* webpackChunkName: "Contacts" */)
);
const NotFoundPageView = lazy(() =>
  import("../views/NotFoundPageView" /* webpackChunkName: "NotFoundPage" */)
);

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, []);

  return (
    <div className={styles.container}>
      <NavBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PublicRoute path="/register" restricted>
            <RegistrationView />
          </PublicRoute>
          <PublicRoute path="/login" restricted>
            <LoginView />
          </PublicRoute>
          <PrivateRoute path="/addContact">
            <AddContactView />
          </PrivateRoute>
          <PrivateRoute path="/contacts">
            <ContactsView />
          </PrivateRoute>
          <Route>
            <NotFoundPageView />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
