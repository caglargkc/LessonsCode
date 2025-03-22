import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter', // Bu slice'ın adı
  initialState: { count: 0 }, // Başlangıç durumu
  reducers: {
    increment: (state) => {
      state.count += 1; // State doğrudan değiştirilebilir (Immer kullanılır)
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload; // Action'dan gelen değeri ekler
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions; // Action'ları dışa aktar
export default counterSlice.reducer; // Reducer'ı dışa aktar
