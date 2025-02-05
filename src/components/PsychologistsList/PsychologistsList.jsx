import { useSelector } from 'react-redux';
import { selectPsychologists } from '../../redux/psychologists/selectors.js';
import { selectFilter } from '../../redux/filters/selectors.js';
import { PsychologistCard } from '../PsychologistCard/PsychologistCard.jsx';
import {
  sortByLastName,
  sortArray,
  filterAndSortByPrice,
} from '../../utils/sort.js';

import css from './PsychologistsList.module.css';

export const PsychologistList = () => {
  const psychologists = useSelector(selectPsychologists);
  const filterValue = useSelector(selectFilter);

  const filterPsychologists = (list, filter) => {
    console.log(list,filter);
    switch (filter) {
      case 'Show all':
        return list;
      case '':
        return list;

      case 'A to Z':
        return sortByLastName([...list], 'asc');
      case 'Z to A':
        return sortByLastName([...list], 'desc');
      case 'Less than 10$':
        return filterAndSortByPrice([...list], true);
      case 'Greater than 10$':
        return filterAndSortByPrice([...list], false);
      case 'Popular':
        return sortArray(list, 'rating', 'desc');
      case 'Not popular':
        return sortArray(list, 'rating', 'asc');

      default:
        return list;
    }
  };
  const filterdListPsychologist = filterPsychologists(
    psychologists,
    filterValue
  );
  // console.log(filterdListPsychologist);
  return (
    <ul>
      {filterdListPsychologist.map((psychologist) => {
        return (
          <li key={psychologist.id} className={css.list}>
            <PsychologistCard data={psychologist} />
          </li>
        );
      })}
    </ul>
  );
};
