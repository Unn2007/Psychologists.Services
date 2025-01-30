import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
// const isLoggedIn = useSelector(selectIsLoggedIn);
const isLoggedIn = false;
export const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>

      <NavLink className={buildLinkClass} to="/psychologists">
      Psychologists
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildLinkClass} to="/favorites">
          Favorites
        </NavLink>
      )}
    </nav>
  );
};
