import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-operations';
import { useState } from 'react';
import styles from './AddForm.module.css';

function AddForm() {
    const [formData, setFormData] = useState({ name: '', number: '' });
    const contacts = useSelector(state => state.contacts.items);
    const { isLoggedIn } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const onInputChange = e => {
        setFormData(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onUserSubmit = e => {
        e.preventDefault();
        if (checkEnteredName(formData.name))
            return alert(`${formData.name} is already in your contacts`);
        dispatch(addContact(formData));

        setFormData({ name: '', number: '' });
    };

    const checkEnteredName = name => {
        const normalizedName = name.toLowerCase();
        return contacts.some(
            ({ name }) => name.toLowerCase() === normalizedName,
        );
    };

    return (
        <>
            {isLoggedIn ? (
                <form
                    className={styles['form-wrapper']}
                    onSubmit={onUserSubmit}
                >
                    <label>
                        <span className={styles['label-text']}>
                            First name:
                        </span>
                        <input
                            onChange={onInputChange}
                            className={styles.input}
                            placeholder="Ivanov Ivan"
                            type="text"
                            name="name"
                            value={formData.name}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                            required
                        />
                    </label>
                    <label>
                        <span className={styles['label-text']}>
                            Phone number:
                        </span>
                        <input
                            className={styles.input}
                            placeholder="+7-999-999-99-99"
                            type="tel"
                            name="number"
                            value={formData.number}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                            required
                            onChange={onInputChange}
                        />
                    </label>
                    <button type="submit" className={styles.button}>
                        Add contact
                    </button>
                </form>
            ) : (
                <h2>You need to login at first.</h2>
            )}
        </>
    );
}

AddForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    onInputChange: PropTypes.func,
    onUserSubmit: PropTypes.func,
};

export default AddForm;
