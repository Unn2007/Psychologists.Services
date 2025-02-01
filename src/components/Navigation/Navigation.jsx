import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import {selectIsLoggedIn} from '../../redux/auth/selectors.js'
import clsx from "clsx";
import css from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
 

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
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
