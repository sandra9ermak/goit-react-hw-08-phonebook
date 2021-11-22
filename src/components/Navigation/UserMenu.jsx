import s from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import { authSelectors } from "../../redux/auth";
import { useSelector } from "react-redux";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <nav className={s.userMenu}>
      <NavLink
        exact
        to="/contacts"
        className={s.navLink}
        activeClassName={s.activeLink}
      >
        Contacts
      </NavLink>
      <p className={s.userName}>Hi, {name}!</p>
      <button type="button" className={s.btnExit} onClick={() => dispatch(authOperations.logout())}>
        Exit
      </button>
    </nav>
  );
};

export default UserMenu;
