import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [];

if (process.env.NODE_ENV === 'dev') {
  middlewares.push(logger);
}

export const store = createStore(
  persistedReducer,
  undefined,
  compose(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);