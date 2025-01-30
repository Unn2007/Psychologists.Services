import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.authNav}>
      
      <NavLink className={`${css.login} ${css.link}`} to="/login">
        Log In
      </NavLink>
      <NavLink className={`${css.register} ${css.link}`} to="/register">
        Registration
      </NavLink>
    </div>
  );
};
