import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from './slices/transactionsSlice';
import roleReducer from './slices/roleSlice';
import mockData from '../mockData';

// Load initial state from localStorage
const loadState = () => {
  try {
    const serializedTransactions = localStorage.getItem('transactions');
    const serializedRole = localStorage.getItem('role');

    return {
      transactions: {
        items: serializedTransactions ? JSON.parse(serializedTransactions) : mockData
      },
      role: {
        currentRole: serializedRole ? JSON.parse(serializedRole) : 'viewer'
      }
    };
  } catch (err) {
    console.warn('Error loading state from localStorage:', err);
    return {
      transactions: { items: mockData },
      role: { currentRole: 'viewer' }
    };
  }
};

// Save state to localStorage
const saveState = (state) => {
  try {
    localStorage.setItem('transactions', JSON.stringify(state.transactions.items));
    localStorage.setItem('role', JSON.stringify(state.role.currentRole));
  } catch (err) {
    console.warn('Error saving state to localStorage:', err);
  }
};

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    role: roleReducer,
  },
  preloadedState,
});

// Subscribe to store changes and save to localStorage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
