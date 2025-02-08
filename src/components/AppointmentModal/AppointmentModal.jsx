import css from './AppointmentModal.module.css';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/operations.js';
import { closeAppointmentModal } from '../../redux/modals/slice.js';

import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Icon } from '../Icon/Icon.jsx';
import OptionalButton from '../../components/OptionalButton/OptionalButton.jsx';
import { PsychologistInfo } from '../PsychologistInfo/PsychologistInfo.jsx';

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
  phone: yup
    .string()
    .matches(/^\+380\d{9}$/, 'Формат: +380XXXXXXXXX')
    .required('Це поле обов’язкове'),
  time: yup
    .string()
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Формат: 00:00')
    .required('Це поле обов’язкове'),
  comment: yup
    .string()
    .min(3, 'Мінімум 3 символи')
    .max(100, 'Максимум 100 символів'),
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

export const AppointmentModal = () => {
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
      logIn({
        email: values.email,
        password: values.password,
        phone: values.phone,
        time: values.time,
        comment: values.comment,
      })
    )
      .unwrap()
      .then(() => {
        console.log('Appointment success');
        reset();
        dispatch(closeAppointmentModal());
      })
      .catch(() => {
        console.log('Appointment error');
      });
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={() => dispatch(closeAppointmentModal())}
      style={customStyles}
      contentLabel="Appointment form Modal"
    >
      <div className={css.registerForm}>
        <h2 className={css.formHeader}>
          Make an appointment with a psychologist
        </h2>
        <p className={css.formText}>
          You are on the verge of changing your life for the better. Fill out
          the short form below to book your personal appointment with a
          professional psychologist. We guarantee confidentiality and respect
          for your privacy.
        </p>
        <PsychologistInfo />
        <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
          <input
            type="text"
            placeholder="Name"
            {...register('name')}
            className={`${css.input} ${css.name}`}
          />
          {errors.name && <p className={css.error}>{errors.name.message}</p>}

          <div className={css.inputWrapper}>
            <input
              type="text"
              placeholder="+380"
              {...register('phone')}
              className={css.input}
            />
            {errors.phone && (
              <p className={css.error}>{errors.phone.message}</p>
            )}

            <input
              type="time"
              placeholder="Time (00:00)"
              {...register('time')}
              className={css.input}
            />
            {errors.time && <p className={css.error}>{errors.time.message}</p>}
          </div>

          <input
            type="email"
            placeholder="Email"
            {...register('email')}
            className={`${css.input} ${css.email}`}
          />
          {errors.email && <p className={css.error}>{errors.email.message}</p>}

          <textarea
            placeholder="Comment"
            {...register('comment')}
            className={`${css.input} ${css.comment}`}
            rows={4}
          ></textarea>
          {errors.comment && (
            <p className={css.error}>{errors.comment.message}</p>
          )}

          <OptionalButton
            type="submit"
            isPrimaryButton={true}
            externalClass={css.submitButton}
          >
            Send
          </OptionalButton>
        </form>
        <button
          type="button"
          className={css.closeButton}
          onClick={() => dispatch(closeAppointmentModal())}
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
