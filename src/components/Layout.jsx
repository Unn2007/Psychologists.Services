import { Suspense } from "react";
import { AppBar } from "./AppBar/AppBar";
import {RegisterForm} from "./RegisterForm/RegisterForm.jsx"; 
import {LoginForm} from "./LoginForm/LoginForm.jsx"
import { Toaster } from 'react-hot-toast';

import { useSelector } from "react-redux";
import {selectRegisterModalState,selectLoginModalState,selectAppointmentModalState} from "../redux/modals/selectors.js"; 

export const Layout = ({ children }) => {
  const isRegisterOpen = useSelector(selectRegisterModalState);
  const isLoginOpen = useSelector(selectLoginModalState);
  
  
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
      {isRegisterOpen && <RegisterForm />}
      {isLoginOpen && <LoginForm />}
      <Toaster/>
      
    </div>
  );
};
