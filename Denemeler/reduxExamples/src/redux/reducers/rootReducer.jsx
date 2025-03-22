import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

// Tüm reducer'ları birleştirme
const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
