import { NavLink } from "react-router-dom";
import UserMenu from "./UserMenu";
import s from "./NavBar.module.css";
import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";
import RegisterMenu from "./RegisterMenu";

const NavBar = () => {
  const isLoggenIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <div className={s.navBar}>
      <nav>
        <NavLink
          exact
          to="/"
          className={s.navLink}
          activeClassName={s.activeLink}
        >
          Home
        </NavLink>
        </nav>
        <div className={s.menu}>
        {isLoggenIn ? (
          <UserMenu />
        ) : (
          <RegisterMenu/>
        )}
        </div>
    </div>
  );
};

export default NavBar;
