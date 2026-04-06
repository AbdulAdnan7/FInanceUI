import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from './slices/transactionsSlice';
import roleReducer from './slices/roleSlice';

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    role: roleReducer,
  },
});

export default store;
