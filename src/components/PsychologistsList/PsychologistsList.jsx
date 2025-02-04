import { useSelector } from 'react-redux';
import { selectPsychologists } from '../../redux/psychologists/selectors.js';
import { PsychologistCard } from '../PsychologistCard/PsychologistCard.jsx';

import css from './PsychologistsList.module.css';

export const PsychologistList = () => {
  const psychologists = useSelector(selectPsychologists);

  return (
    <ul className={css.list}>
      {psychologists.map((psychologist) => {
        return (
          <li key={psychologist.id}>
            <PsychologistCard data={psychologist} />
          </li>
        );
      })}
    </ul>
  );
};
