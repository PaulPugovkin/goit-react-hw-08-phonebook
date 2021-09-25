import { createSlice } from '@reduxjs/toolkit';
import { signUpNewUser } from './auth-operations';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [signUpNewUser.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
    },
});

export default authSlice.reducer;
