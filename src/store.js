import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './features/rockets/rocketSlice';

export default configureStore({
  reducer: {
    rockets: rocketReducer,
  },
});
