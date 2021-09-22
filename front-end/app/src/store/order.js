import { createSlice } from '@reduxjs/toolkit';

const { reducer, actions } = createSlice({
  name: 'order',
  initialState: {
    items: [],
  },
  reducers: {
    addOrder(state, action) {
        state.items.push(action.payload);
    },
    remove(state, action) {
        let product = null;
        state.items.map((object, index) =>  object.code === action.payload.code ? product = object : '' );
        let indexToDelete = state.items.indexOf(product);
        if (indexToDelete !== -1) {
            delete state.items[indexToDelete]
        }
    },
  }
});

export { actions as ordersActions };
export { reducer as ordersReducer };
