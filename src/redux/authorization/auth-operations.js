import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset(token) {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const register = createAsyncThunk(
    'phonebook/signUp',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`/users/signup`, credentials);
            token.set(data.token);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

export const login = createAsyncThunk('phonebook/login', async credentials => {
    try {
        const { data } = await axios.post(`/users/login`, credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        console.log(error.message);
    }
});

export const logout = createAsyncThunk('phonebook/logout', async () => {
    try {
        await axios.post(`/users/logout`);
        token.unset();
    } catch (error) {
        console.log(error.message);
    }
});

export const fetchCurrentUser = createAsyncThunk(
    'phonebook/auth-refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            console.log('Токена нет, уходим из fetchCurrentUser');
            return thunkAPI.rejectWithValue();
        }

        token.set(persistedToken);
        try {
            const { data } = await axios.get('/users/current');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);
