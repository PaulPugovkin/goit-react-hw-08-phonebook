import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewContact from '../NewContact';
import Filter from '../Filter';
import styles from './UserPhoneBook.module.css';
import {
    deleteContact,
    getAllContacts,
} from '../../redux/contacts/contacts-operations';

const UserPhoneBook = () => {
    const dispatch = useDispatch();

    const getUserContacts = (items, filter) => {
        const normalizedFilter = filter.toLowerCase();

        return items.filter(({ name }) =>
            name.toLowerCase().includes(normalizedFilter),
        );
    };

    const { items, filter } = useSelector(state => state.contacts);
    const { isLoggedIn } = useSelector(state => state.auth);
    const contacts = getUserContacts(items, filter);

    useEffect(() => {
        if (isLoggedIn) dispatch(getAllContacts());
    }, [isLoggedIn]);

    const handleDeleteContact = id => dispatch(deleteContact(id));

    return (
        <>
            {isLoggedIn && items.length > 0 && (
                <div className={styles.wrapper}>
                    <Filter />
                    <h2 className={styles.title}>Your contacts</h2>
                    <ul className={styles.list}>
                        {contacts.map(({ id, name, number }) => (
                            <NewContact
                                key={id}
                                name={name}
                                number={number}
                                id={id}
                                onDelete={() => handleDeleteContact(id)}
                            />
                        ))}
                    </ul>
                </div>
            )}

            {isLoggedIn && items.length <= 0 && (
                <h2 className={styles.title}>There is no contacts yet!</h2>
            )}
        </>
    );
};

UserPhoneBook.propTypes = {
    // contact: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    onDelete: PropTypes.func,
};

export default UserPhoneBook;
