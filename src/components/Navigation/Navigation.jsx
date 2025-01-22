import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
// const isLoggedIn = useSelector(selectIsLoggedIn);
const isLoggedIn = true;
export const Navigation = () => {
  return (
    <nav>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>

      <NavLink className={buildLinkClass} to="/psychologists">
      Psychologists
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/favorites">
          Favorites
        </NavLink>
      )}
    </nav>
  );
};
