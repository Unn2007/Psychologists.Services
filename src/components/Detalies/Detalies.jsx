import css from './Detalies.module.css';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {selectPsychologists} from '../../redux/psychologists/selectors.js';
import {Comment} from '../../components/Comment/Comment.jsx'
import OptionalButton from '../OptionalButton/OptionalButton.jsx'
import { useDispatch } from "react-redux";
import {openAppointmentModal} from '../../redux/modals/slice.js'
import {AppointmentModal} from "../../components/AppointmentModal/AppointmentModal.jsx"
import {selectAppointmentModalState} from "../../redux/modals/selectors.js"; 
import { selectIsLoggedIn } from '../../redux/auth/selectors';


export const Detalies = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const openModal = () =>  {
    
    isLoggedIn ?  dispatch(openAppointmentModal()):toast.error('This functionality is available for authorized users.')};
  const isAppointmentOpen =useSelector(selectAppointmentModalState);
  const { psychologistId } = useParams();
  const psychologists=useSelector(selectPsychologists);
  const reviews=psychologists.find((psychologist)=>psychologistId===psychologist.id).reviews;
  
  return (
    <div className={css.wrapper}>
    <ul >
      {reviews.map((review=><li key={review.reviewer} className={css.item}><Comment info={review} /></li>))}
    </ul>
    <OptionalButton
      handleClick={openModal}
      isPrimaryButton={true}
      externalClass={`${css.register} ${css.link}`}
      >
        Make an appointment

      </OptionalButton>
      {isAppointmentOpen && <AppointmentModal />}
    </div>
  );
};
