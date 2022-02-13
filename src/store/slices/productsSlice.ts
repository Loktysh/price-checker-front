import { createSlice } from '@reduxjs/toolkit';

const initialState: { tracked: string[] } = {
  tracked: [],
};

const productsSlice = createSlice({
  name: 'trackedProducts',
  initialState,
  reducers: {
    initTrackedItems: (state, action) => {
      return {
        tracked: [...state.tracked, ...action.payload],
      };
    },
    trackItem: (state, action) => {
      return {
        tracked: [...state.tracked, action.payload],
      };
    },
    untrackItem: (state, action) => {
      return {
        tracked: state.tracked.filter(item => item !== action.payload),
      };
    },
  },
});

export const { initTrackedItems, trackItem, untrackItem } = productsSlice.actions;

export default productsSlice.reducer;
