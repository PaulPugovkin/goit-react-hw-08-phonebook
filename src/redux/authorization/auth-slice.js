import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout } from './auth-operations';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        [register.rejected](state, action) {
            console.log('error!');
        },
        [login.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [logout.fulfilled](state, action) {
            state.user = { user: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
    },
});

export default authSlice.reducer;
