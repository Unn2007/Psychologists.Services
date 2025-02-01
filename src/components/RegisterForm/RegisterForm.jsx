import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register as registerUser } from "../../redux/auth/operations.js";
import { closeRegisterModal } from '../../redux/modals/slice.js';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Icon } from '../Icon/Icon.jsx';
import OptionalButton from '../../components/OptionalButton/OptionalButton.jsx';
import css from './RegisterForm.module.css';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Мінімум 3 символи')
    .max(20, 'Максимум 20 символів')
    .required('Це поле обов’язкове'),
  email: yup
    .string()
    .email('Невірний формат email')
    .min(3, 'Мінімум 3 символи')
    .max(20, 'Максимум 20 символів')
    .required('Це поле обов’язкове'),
  password: yup
    .string()
    .min(8, 'Мінімум 8 символів')
    .max(30, 'Максимум 30 символів')
    .required('Це поле обов’язкове'),
});

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(25, 26, 21, 0.6)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: 'clamp(calc(0.22 * 30px), 3rem, 30px)',
  },
};

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {

dispatch(
  registerUser({
    displayName:values.name,
    email: values.email,
    password: values.password,
  })
)
  .unwrap()
  .then(() => {
    console.log("login success");
    reset();
    dispatch(closeRegisterModal())
  })
  .catch(() => {
    console.log("login error");
  });


    
  };
  return (
    <Modal
      isOpen={true}
      onRequestClose={() => dispatch(closeRegisterModal())}
      style={customStyles}
      contentLabel="Register form Modal"
    >
      <div className={css.registerForm}>
        <h2 className={css.formHeader}>Registration</h2>
        <p className={css.formText}>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
          <input
            type="text"
            placeholder="Name"
            {...register('name')}
            className={`${css.input} ${css.notLast}`}
          />
          {errors.name && <p className={css.error}>{errors.name.message}</p>}

          <input
            type="email"
            placeholder="Email"
            {...register('email')}
            className={`${css.input} ${css.notLast}`}
          />
          {errors.email && <p className={css.error}>{errors.email.message}</p>}

          <div className={css.passwordWrapper}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              {...register('password')}
              className={css.input}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className={css.showButton}
            >
              <Icon
                width={20}
                height={15}
                href={`${showPassword ? 'icon-eye' : 'icon-eyeOff'}`}
                className={css.eye}
              />
            </button>
          </div>
          {errors.password && (
            <p className={css.error}>{errors.password.message}</p>
          )}

          <OptionalButton
            type="submit"
            isPrimaryButton={true}
            externalClass={css.submitButton}
           
          >
            Sign Up
          </OptionalButton>
        </form>
        <button
          type="button"
          className={css.closeButton}
          onClick={() => dispatch(closeRegisterModal())}
        >
          <Icon
            width={32}
            height={32}
            href="icon-close"
            className={css.close}
          />
        </button>
      </div>
    </Modal>
  );
};
