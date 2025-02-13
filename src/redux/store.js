import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { psychologistsReducer } from './psychologists/slice.js';
import { authReducer } from './auth/slice';
import { filtersReducer } from './filters/slice';
import modalReducer from './modals/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'refreshToken', 'tokenExpiresAt'],
};

const psychologistsPersistConfig = {
  key: 'psychologists',
  storage,
  whitelist: ['favorites'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    psychologists: persistReducer(
      psychologistsPersistConfig,
      psychologistsReducer
    ),
    filters: filtersReducer,
    modals: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
