import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectPsychologists } from '../../redux/psychologists/selectors.js';
import css from './PsychologistInfo.module.css';

export const PsychologistInfo = () => {
  const { psychologistId } = useParams();
  const psychologists = useSelector(selectPsychologists);

  const { name, avatar_url: url } = psychologists.find(
    (psychologist) => psychologistId === psychologist.id
  );
  return (
    <div className={css.wrapper}>
      <img alt="Psychologist foto" src={url} className={css.image} />
      <div>
        <h3 className={css.header}>Your psychologists</h3>
        <p className={css.name}>{name}</p>
      </div>
    </div>
  );
};
