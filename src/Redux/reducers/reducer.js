import { createSlice } from '@reduxjs/toolkit';

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        value: "",
        history: [],
        errorText: ""
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
export const errorText = (state) => state.calculator.errorText;

export default calculatorSlice.reducer;
