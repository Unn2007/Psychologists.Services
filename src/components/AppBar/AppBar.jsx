import { Navigation } from "../Navigation/Navigation";
import {UserMenu} from '../UserMenu/UserMenu.jsx'
import {AuthNav} from '../../components/AuthNav/AuthNav.jsx'
import css from "./AppBar.module.css";

export const AppBar = () => {
  return (
    <header className={css.header}>
      <Navigation />
      {true ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
