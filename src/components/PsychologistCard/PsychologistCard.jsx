import {Link } from 'react-router-dom';
import css from './PsychologistCard.module.css';
import { Icon } from '../../components/Icon/Icon.jsx';
import { Suspense } from 'react';
import { Outlet} from 'react-router-dom';

export const PsychologistCard = ({data}) => {
  const {avatar_url,experience,about,initial_consultation,license,name,price_per_hour,rating,specialization,reviews}=data;
 
  return (
    <article className={css.card}>
      <div className={css.imageContainer}>
        <img alt="Psychologist foto" src={avatar_url} className={css.foto}/>
      </div>
      <div>
        <div className={css.headerCard}>
          <h3 className={css.header}>Psychologist</h3>
          <Icon width={16} height={16} href="icon-starYellow" className={css.star} />
          <p className={css.rating}>{`Rating: ${rating}`}</p>
          <p className={css.priceText}>"Price / 1 hour:" <span className={css.price}>{`${price_per_hour}$`}</span></p>
          <button type='button' className={css.buttonHeart}>
            <Icon
            width={26} height={26} href="icon-heartBlack" className={css.heart}
            />

          </button>
        </div>
        <h2 className={css.name}>{name}</h2>
        <div className={css.experience}>
          <p><span className={css.experienceName}>Experience: </span>{`${experience}`}</p>
          <p><span className={css.experienceName}>License: </span>{`${license}`}</p>
        </div>
        <div className={css.specialization}>
          <p ><span className={css.experienceName}>Specialization: </span>{`${specialization}`}</p>
          <p><span className={css.experienceName}>Initial_consultation: </span>{`${initial_consultation}`}</p>
        </div>
        <p className={css.about}>{about}</p>
      </div>
      {/* <Link to={`/psychologists/${data.id}/detalies`}>Read more</Link> */}
      <Link to={`${data.id}/detalies`}>Read more</Link>
      {/* <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense> */}

      
    </article>
  );
};
