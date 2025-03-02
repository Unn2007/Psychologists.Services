import { Icon } from '../Icon/Icon.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors.js';
import { logOut } from '../../redux/auth/operations.js';
import OptionalButton from '../OptionalButton/OptionalButton.jsx';
import css from './UserMenu.module.css';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const logOutUser = () => dispatch(logOut());
  return (
    <div className={css.userMenu}>
      <Icon width={40} height={40} href="icon-user" className={css.user} />
      <p className={css.userName}>{user.name}</p>
      <OptionalButton
        handleClick={logOutUser}
        isPrimaryButton={false}
        externalClass={`${css.button}`}
      >
        Log out
      </OptionalButton>
    </div>
  );
};
