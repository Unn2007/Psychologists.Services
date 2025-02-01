import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar/AppBar";
import {RegisterForm} from "./RegisterForm/RegisterForm.jsx"; 
import {LoginForm} from "./LoginForm/LoginForm.jsx"
import { useSelector } from "react-redux";
import {selectRegisterModalState,selectLoginModalState} from "../redux/modals/selectors.js"; 

export const Layout = ({ children }) => {
  const isRegisterOpen = useSelector(selectRegisterModalState);
  const isLoginOpen = useSelector(selectLoginModalState);
  
  
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
      {isRegisterOpen && <RegisterForm />}
      {isLoginOpen && <LoginForm />}
    </div>
  );
};
