import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const addNewContact = async data => {
    const response = await axios.post('/contacts', data);
    return await response.json();
};

export const getAllContacts = async () => {
    const response = await axios.get('/contacts');
    const result = await response.json();
    return result;
};

export const deleteSelectedContact = async id => {
    const response = await axios.delete(`contacts/${id}`, id);
    const result = await response.json();
    return result;
};
