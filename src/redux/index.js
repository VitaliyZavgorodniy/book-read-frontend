import {
  configureStore,
  createSerializableStateInvariantMiddleware,
} from '@reduxjs/toolkit';
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
import thunk from 'redux-thunk';
import thunkMiddleware from 'redux-thunk';

import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth';
import { libraryReducer } from './library';
import { trainingReducer } from './training';
import { reviewsReducer } from './reviews';
import { modalsReducer } from './modals';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isNewUser'],
};

const serializableMiddleware = createSerializableStateInvariantMiddleware({
  ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
});

const middleware = [thunk, serializableMiddleware, thunkMiddleware];

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    library: libraryReducer,
    training: trainingReducer,
    reviews: reviewsReducer,
    modals: modalsReducer,
  },
  middleware,
});

const persistor = persistStore(store);
// eslint-disable-next-line
export default { store, persistor };
