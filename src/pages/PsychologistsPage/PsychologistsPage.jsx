import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { Loader } from '../../components/Loader/Loader.jsx';
import DocumentTitle from '../../components/DocumentTitle';
import { PsychologistsList } from '../../components/PsychologistsList/PsychologistsList.jsx';
import {FiltersForm} from '../../components/FiltersForm/FiltersForm.jsx';
import {
  fetchPsychologists,
  fetchNextPage,
} from '../../redux/psychologists/operations.js';
import {
  selectIsLoading,
  selectLastKey,
  selectPage,
  selectTotal
} from '../../redux/psychologists/selectors.js';
import {nextPage} from '../../redux/psychologists/slice.js'
import OptionalButton from '../../components/OptionalButton/OptionalButton.jsx';
import css from './PsychologistsPage.module.css';
const PsychologistsPage = () => {
  const dispatch = useDispatch();
  const lastKey = useSelector(selectLastKey);
  const isLoading = useSelector(selectIsLoading);
  const total = useSelector(selectTotal);
  const page = useSelector(selectPage);
  const isLastPage = page>(total/3);
  const loadMore = async () => {
    if (!lastKey||isLastPage) return;
    

    dispatch(fetchNextPage(lastKey));
    dispatch(nextPage());
  };

  useEffect(() => {
    if (page===1) {dispatch(fetchPsychologists())}
    
  }, []);
  return (
    <section className={css.page}>
    <div className={`container ${css.container}`}>
      <DocumentTitle>Psychologists</DocumentTitle>
      
      {isLoading && <Loader />}
      <Toaster />
      <FiltersForm/>

      <PsychologistsList />
      {!isLastPage&&<OptionalButton
        handleClick={loadMore}
        isPrimaryButton={true}
        externalClass={`${css.loadMoreButton}`}
        type="button"
      >
        Load more
      </OptionalButton>}
    </div>
    </section>
  );
};

export default PsychologistsPage;
