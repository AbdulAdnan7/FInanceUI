import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentRole: 'viewer',
};

const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.currentRole = action.payload;
    },
  },
});

export const { setRole } = roleSlice.actions;

export default roleSlice.reducer;
