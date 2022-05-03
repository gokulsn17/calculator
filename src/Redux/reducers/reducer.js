import { createSlice } from '@reduxjs/toolkit';

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        value: "",
        history: []
    },
    reducers: {
        updateRedux: (state, data) => {
            state[data.payload.key] = data.payload.result
        },
    },
})

export const { updateRedux } = calculatorSlice.actions;

export const value = (state) => state.calculator.value;
export const history = (state) => state.calculator.history;

export default calculatorSlice.reducer;
