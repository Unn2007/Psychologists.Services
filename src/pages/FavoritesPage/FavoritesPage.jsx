import DocumentTitle from '../../components/DocumentTitle';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { Loader } from '../../components/Loader/Loader.jsx';
import { PsychologistsList } from '../../components/PsychologistsList/PsychologistsList.jsx';
import { FiltersForm } from '../../components/FiltersForm/FiltersForm.jsx';
import {
  fetchFavoritePsychologists,
  
} from '../../redux/psychologists/operations.js';
import {
  selectIsLoading,
  selectFavorites,
  selectPsychologists,
  
} from '../../redux/psychologists/selectors.js';


import css from './FavoritesPage.module.css';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const psychologistsState = useSelector(selectPsychologists);
  const isLoading = useSelector(selectIsLoading);
 
  

  useEffect(() => {
    
      dispatch(fetchFavoritePsychologists({ favoriteIds:favorites, psychologistsState:psychologistsState }));
  
  }, [favorites, psychologistsState, dispatch]);
  return (
    <section className={css.page}>
      <div className={`container ${css.container}`}>
        <DocumentTitle>Psychologists</DocumentTitle>

        {isLoading && <Loader />}
        <Toaster />
        <FiltersForm />

        <PsychologistsList isFavorite={true}/>
       
      </div>
    </section>
  );
};

export default FavoritesPage;
