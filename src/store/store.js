import { createStore } from '@reduxjs/toolkit';
import reducers from './reducer';

export const store = createStore(reducers);
