import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../redux/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.count); // State'e erişim
  const dispatch = useDispatch(); // Action'ları dispatch et

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Artır</button>
      <button onClick={() => dispatch(decrement())}>Azalt</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>5 Ekle</button>
    </div>
  );
};

export default Counter;
