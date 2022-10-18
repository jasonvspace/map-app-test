import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import chargersReducer, {chargersSlice} from './slices/chargersSlice';

export const store = configureStore({
  reducer: {
    chargers: chargersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const selectChargers = (state: RootState) => state[chargersSlice.name];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
