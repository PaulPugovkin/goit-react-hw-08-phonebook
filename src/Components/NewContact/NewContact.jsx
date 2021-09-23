import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions';
import styles from './NewContact.module.css';

const NewContact = ({ name, number, id }) => {
    const dispatch = useDispatch();
    return (
        <li className={styles.item}>
            {name}: {number}{' '}
            <button
                className={styles.button}
                type="button"
                onClick={() => dispatch(deleteContact(id))}
            >
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
