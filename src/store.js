import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './Redux/reducers/reducer';

export default configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});




