import { createSlice } from '@reduxjs/toolkit';
import transactions from '../../mockData';

const initialState = {
  items: transactions,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      const newTransaction = {
        ...action.payload,
        id: Date.now(),
      };
      state.items.push(newTransaction);
    },
    updateTransaction: (state, action) => {
      const { id, ...updates } = action.payload;
      const transaction = state.items.find((t) => t.id === id);
      if (transaction) {
        Object.assign(transaction, updates);
      }
    },
    deleteTransaction: (state, action) => {
      state.items = state.items.filter((t) => t.id !== action.payload);
    },
    setTransactions: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const {
  addTransaction,
  updateTransaction,
  deleteTransaction,
  setTransactions,
} = transactionsSlice.actions;

export default transactionsSlice.reducer;
