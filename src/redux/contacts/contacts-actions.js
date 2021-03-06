import { createAction } from '@reduxjs/toolkit';

export const getContactsRequest = createAction('phonebook/getContactsRequest');
export const getContactsSuccess = createAction('phonebook/getContactsSuccess');
export const getContactsError = createAction('todos/getContactsError');

export const addContactRequest = createAction('phonebook/addContactRequest');
export const addContactSuccess = createAction('phonebook/addContactSuccess');
export const addContactError = createAction('phonebook/addContactError');

export const deleteContactRequest = createAction(
    'phonebook/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
    'phonebook/deleteContactSuccess',
);
export const deleteContactError = createAction('phonebook/deleteContactError');

export const updateContactRequest = createAction(
    'phonebook/updateContactRequest',
);
export const updateContactSuccess = createAction(
    'phonebook/updateContactSuccess',
);
export const updateContactError = createAction('phonebook/updateContactError');

export const changeFilter = createAction('phonebook/filter');
