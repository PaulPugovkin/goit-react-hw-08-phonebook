import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './reducer';

export const store = configureStore({
    reducer: {
        contacts: contactReducer,
    },
    devTools: process.env.NODE_ENV === 'development',
});
