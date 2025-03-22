import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer, // Counter slice reducer'ını ekle
  },
});

export default store;
