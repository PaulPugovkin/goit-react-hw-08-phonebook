import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import {
    addNewContact,
    getAllContacts,
    deleteSelectedContact,
} from '../services/api';

export const getContacts = createAsyncThunk(
    'phonebook/getContacts',
    async () => await getAllContacts(),
);

export const addContact = createAsyncThunk(
    'phonebook/add',
    async (name, number) => await addNewContact(name, number),
);

export const deleteContact = createAsyncThunk(
    'phonebook/delete',
    async id => await deleteSelectedContact(id),
);
export const changeFilter = createAction('phonebook/filter');
