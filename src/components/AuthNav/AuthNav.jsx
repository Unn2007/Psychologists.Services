
import { useDispatch } from "react-redux";
import {openRegisterModal,openLoginModal} from "../../redux/modals/slice.js";
import OptionalButton from '../OptionalButton/OptionalButton.jsx'

import css from './AuthNav.module.css';



export const AuthNav = () => {
  const dispatch = useDispatch();
  const openModal = () => dispatch(openRegisterModal());
  const openSignInModal = () => dispatch(openLoginModal());
 
  return (
    <div className={css.authNav}>
      <OptionalButton
      handleClick={openSignInModal}
      isPrimaryButton={false}
      externalClass={`${css.login} ${css.link}`}
      >
        Log In

      </OptionalButton>
      <OptionalButton
      handleClick={openModal}
      isPrimaryButton={true}
      externalClass={`${css.register} ${css.link}`}
      >
        Registration

      </OptionalButton>
      
      
    </div>
  );
};
