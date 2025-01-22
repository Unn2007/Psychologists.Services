import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout.jsx';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute.jsx';
import { PrivateRoute } from './PrivateRoute/PrivateRoute.jsx';
import NotFoundPage from '../pages/NotFounPage/NotFounPage.jsx';

const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));
const PsychologistsPage = lazy(() =>
  import('../pages/PsychologistsPage/PsychologistsPage.jsx')
);
const RegisterPage = lazy(() =>
  import('../pages/RegisterPage/RegisterPage.jsx')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage.jsx'));
const FavoritesPage = lazy(() =>
  import('../pages/FavoritesPage/FavoritesPage.jsx')
);
const Detalies = lazy(() => import('./Detalies/Detalies.jsx'));

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/psychologists"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/psychologists"
              component={<LoginPage />}
            />
          }
        />
        <Route path="/psychologists" element={<PsychologistsPage />}>
          <Route path="detalies" element={<Detalies />} />
        </Route>
        <Route
          path="/favorites"
          element={
            <PrivateRoute redirectTo="/login" component={<FavoritesPage />} />
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};
