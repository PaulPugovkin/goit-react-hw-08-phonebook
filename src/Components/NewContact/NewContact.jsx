import PropTypes from 'prop-types';
import styles from './NewContact.module.css';

const NewContact = ({ name, number, onDelete }) => {
    return (
        <li className={styles.item}>
            {name}: {number}{' '}
            <button className={styles.button} type="button" onClick={onDelete}>
                Delete
            </button>
        </li>
    );
};

NewContact.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
    onDelete: PropTypes.func,
};

export default NewContact;
