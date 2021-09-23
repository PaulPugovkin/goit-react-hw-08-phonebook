import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import NewContact from '../NewContact';
import styles from './UserPhoneBook.module.css';

const UserPhoneBook = () => {
    const getUserContacts = (items, filter) => {
        const normalizedFilter = filter.toLowerCase();

        return items.filter(({ name }) =>
            name.toLowerCase().includes(normalizedFilter),
        );
    };

    const { items, filter } = useSelector(state => state.contacts);
    const contacts = getUserContacts(items, filter);

    return (
        <div className={styles.wrapper}>
            <h2>Your contacts</h2>
            <ul className={styles.list}>
                {contacts.map(({ id, name, number }) => (
                    <NewContact key={id} name={name} number={number} id={id} />
                ))}
            </ul>
        </div>
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
