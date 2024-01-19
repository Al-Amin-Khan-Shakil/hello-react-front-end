import { combineReducers } from '@reduxjs/toolkit';
import randomMessage from './welcome/greetingsSlice';

const rootReducer = combineReducers({
  Random: randomMessage,
});

export default rootReducer;