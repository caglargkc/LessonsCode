import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions/counterActions';

const Counter = () => {
  const count = useSelector((state) => state.counter.count); // Durumu oku
  const dispatch = useDispatch(); // Dispatch oluştur

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Artır</button>
      <button onClick={() => dispatch(decrement())}>Azalt</button>
    </div>
  );
};

export default Counter;
