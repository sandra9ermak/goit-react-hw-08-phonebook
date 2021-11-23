import s from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import { authSelectors } from "../../redux/auth";
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <nav className={s.userMenu}>
      <NavLink
        exact
        to="/addContact"
        className={s.navLink}
        activeClassName={s.activeLink}
      >
        AddContact
      </NavLink>
      <NavLink
        exact
        to="/contacts"
        className={s.navLink}
        activeClassName={s.activeLink}
      >
        Contacts
      </NavLink>
      <Avatar
        sx={{ bgcolor: deepPurple[500] }}
        alt={name}
        src="/broken-image.jpg"
      />
      <p className={s.userName}>Hi, {name}!</p>
      <button
        type="button"
        className={s.btnExit}
        onClick={() => dispatch(authOperations.logout())}
      >
        Exit
      </button>
    </nav>
  );
};

export default UserMenu;
