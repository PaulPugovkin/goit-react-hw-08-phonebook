const url = 'http://localhost:4000/contacts';

export const addNewContact = async (data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return await response.json();
};

export const getAllContacts = async () => {
    const response = await fetch(`${url}`);
    const result = await response.json();
    return result;
};

export const deleteSelectedContact = async id => {
    const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
    });
    const result = await response.json();
    return result;
};
