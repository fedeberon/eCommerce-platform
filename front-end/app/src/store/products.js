import { createSlice } from '@reduxjs/toolkit';

const { reducer, actions } = createSlice({
  name: 'products',
  initialState: {
    items: [],
  },
  reducers: {
    set(state, action) {
        state.items = action.payload;
    },
  }
});

export { actions as productsActions };
export { reducer as productsReducer };
