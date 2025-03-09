import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Icon } from '../Icon/Icon.jsx';
import { setSelectedOption } from '../../redux/filters/slice.js';
import css from './FiltersForm.module.css';

export const FiltersForm = () => {
  const dispatch = useDispatch();
  const { setValue, watch } = useForm({
    defaultValues: { option: 'Show all' },
  });
  const selectedOption = watch('option');

  const [isOpen, setIsOpen] = useState(false);

  const options = [
    'Show all',
    'A to Z',
    'Z to A',
    'Less than 10$',
    'Greater than 10$',
    'Popular',
    'Not popular',
  ];

  useEffect(() => {
    if (selectedOption) {
      dispatch(setSelectedOption(selectedOption));
    }
  }, [selectedOption, dispatch]);

  const handleSelect = (option) => {
    setValue('option', option);
    setIsOpen(false);
  };

  return (
    <form className={css.form}>
      <label className={css.label}>Filters</label>
      <div className={css.customSelect} onClick={() => setIsOpen(!isOpen)}>
        {selectedOption}
        <Icon
          width={15}
          height={10}
          href={`${isOpen ? 'icon-up' : 'icon-down'}`}
          className={css.arrow}
        />
      </div>
      {isOpen && (
        <ul className={css.optionsList}>
          {options.map((option) => (
            <li
              key={option}
              className={`${css.option} ${
                selectedOption === option ? css.active : ''
              }`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};
