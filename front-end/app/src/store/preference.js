import { createSlice } from '@reduxjs/toolkit';

const { reducer, actions } = createSlice({
    name: 'preference',
    initialState: {
        id: "",
    },
    reducers: {
        set(state, action) {
            state.id = action.payload;
        },
    }
});

export { actions as preferenceActions };
export { reducer as preferenceReducer };