import { Navigation } from "../Navigation/Navigation";
import {UserMenu} from '../UserMenu/UserMenu.jsx'
import {AuthNav} from '../../components/AuthNav/AuthNav.jsx'
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

import css from "./AppBar.module.css";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={css.header}>
      <div className={`${css.container} container`}>
      <h2 className={css.logo}>
        <span>psychologists.</span>
        <span className={css.secondWord}>services</span>
        </h2>
      <Navigation  />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};
