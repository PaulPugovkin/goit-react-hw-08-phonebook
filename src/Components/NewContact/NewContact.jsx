import PropTypes from 'prop-types';
import EditContact from '../EditContact/EditContact';
import styles from './NewContact.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contacts/contacts-operations';
import {
    DeleteFilled,
    EditFilled,
    LeftCircleOutlined,
    SaveOutlined,
} from '@ant-design/icons';

const NewContact = ({ name, number, onDelete, id }) => {
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false);
    const [editContact, setEditContact] = useState({ name, number });

    const onEditChange = e => {
        setEditContact(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const handleContactUpdate = (id, data) => {
        dispatch(updateContact(id, data));
        setIsEdit(false);
    };

    return (
        <li className={styles.item}>
            {isEdit && (
                <EditContact
                    name={editContact.name}
                    number={editContact.number}
                    onChange={onEditChange}
                />
            )}
            {!isEdit ? (
                <>
                    <span className={styles.name}>{name}:</span>{' '}
                    <span className={styles.number}>{number}</span>
                    <div className={styles['button-wrapper']}>
                        <button
                            className={styles['button-delete']}
                            type="button"
                            onClick={onDelete}
                        >
                            <DeleteFilled />
                        </button>
                        <button
                            className={styles['button-edit']}
                            type="button"
                            onClick={() => setIsEdit(true)}
                        >
                            <EditFilled />
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <button
                        className={styles['button-back']}
                        type="button"
                        onClick={() => setIsEdit(false)}
                    >
                        <LeftCircleOutlined />
                    </button>
                    <button
                        className={styles['button-save']}
                        type="button"
                        onClick={() => handleContactUpdate(id, editContact)}
                    >
                        <SaveOutlined />
                    </button>
                </>
            )}
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
