import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from './Layout.jsx';
import { PrivateRoute } from './PrivateRoute/PrivateRoute.jsx';
import NotFoundPage from '../pages/NotFounPage/NotFounPage.jsx';
import { refreshUser } from '../redux/auth/operations.js';
import { selectIsRefreshing } from '../redux/auth/selectors.js';
import { PsychologistsList } from '../components/PsychologistsList/PsychologistsList.jsx';

const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));
const PsychologistsPage = lazy(() =>
  import('../pages/PsychologistsPage/PsychologistsPage.jsx')
);

const FavoritesPage = lazy(() =>
  import('../pages/FavoritesPage/FavoritesPage.jsx')
);
const Detalies = lazy(() => import('./Detalies/Detalies.jsx'));
const PsychologistCard = lazy(() =>
  import('./PsychologistCard/PsychologistCard.jsx')
);

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/psychologists" element={<PsychologistsPage />}>
          <Route index element={<PsychologistsList />} />

          <Route
            path=":psychologistId/details"
            element={<PsychologistsList />}
          />
        </Route>
        <Route
          path="/favorites"
          element={
            <PrivateRoute redirectTo="/login" component={<FavoritesPage />} />
          }
        >
          <Route index element={<PsychologistsList isFavorites={true} />} />
          <Route
            path=":psychologistId/details"
            element={<PsychologistsList isFavorites={true} />}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};
