import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const signUpNewUser = createAsyncThunk(
    'phonebook/signUp',
    async credentials => {
        try {
            const { data } = await axios.post(`/users/signup`, credentials);
            return data;
        } catch (error) {
            console.log(error.message);
        }
    },
);
