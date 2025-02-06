import { Icon } from '../Icon/Icon.jsx';
import { capitalizedFirstLetter } from '../../utils/helpers.js';
import css from './Comment.module.css';
export const Comment = ({ info }) => {
  const { reviewer, rating, comment } = info;
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <span className={css.logo}>{capitalizedFirstLetter(reviewer)}</span>
        <div>
          <p className={css.reviewer}>{reviewer}</p>
          <div className={css.ratingWrapper}>
            <Icon
              width={16}
              height={16}
              href="icon-starYellow"
              className={css.star}
            />
            <p className={css.rating}>{rating}</p>
          </div>
        </div>
      </div>
      <p className={css.comment}>{comment}</p>
    </div>
  );
};
