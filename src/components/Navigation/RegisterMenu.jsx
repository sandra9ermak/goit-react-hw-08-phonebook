import s from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const RegisterMenu = () => {
  return (
    <nav>
      <NavLink
        exact
        to="/register"
        className={s.navLink}
        activeClassName={s.activeLink}
      >
        Sign up
      </NavLink>
      <NavLink to="/login" className={s.navLink} activeClassName={s.activeLink}>
        Log In
      </NavLink>
    </nav>
  );
};

export default RegisterMenu;
