import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
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
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-async-storage/async-storage';
import profile from './Profile/profileSlice';
import persist from './Persist/persistSlice';

const persistConfig = {
  key: 'profile',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['persist'],
  stateReconciler: autoMergeLevel2,
};

const reducers = combineReducers({
  profile,
  persist,
});

export const persistedReducer = persistReducer<ReturnType<typeof reducers>>(
  persistConfig,
  reducers,
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
