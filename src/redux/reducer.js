import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
    addContact,
    changeFilter,
    deleteContact,
    getContacts,
} from './actions';

const items = createReducer([], {
    [getContacts.fulfilled]: (_, { payload }) => [...payload],
    [addContact.fulfilled]: (state, payload) => [...state, payload.meta.arg],
    [deleteContact.fulfilled]: (state, payload) => [
        ...state.filter(({ id }) => id !== payload.meta.arg),
    ],
});

const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
    [getContacts.pending]: () => true,
    [getContacts.fulfilled]: () => false,
    [getContacts.rejected]: () => false,
    [addContact.pending]: () => true,
    [addContact.fulfilled]: () => false,
    [addContact.rejected]: () => false,
    [deleteContact.pending]: () => true,
    [deleteContact.fulfilled]: () => false,
    [deleteContact.rejected]: () => false,
});

const onError = createReducer('', {
    [getContacts.rejected]: () => 'Something went wrong, try again later',
    [getContacts.pending]: () => '',
    [addContact.rejected]: () => 'Something went wrong, try again later',
    [addContact.pending]: () => '',
    [deleteContact.rejected]: () => 'Something went wrong, try again later',
    [deleteContact.pending]: () => '',
});

export default combineReducers({
    items,
    filter,
    isLoading,
    onError,
});
