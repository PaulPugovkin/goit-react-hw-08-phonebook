import { Input } from 'antd';
import styles from './EditContact.module.css';

const EditContact = ({ name, number, onChange }) => {
    return (
        <div className={styles['edit-wrapper']}>
            <Input
                className={styles.input}
                placeholder="Name"
                name="name"
                type="text"
                value={name}
                onChange={onChange}
            />

            <Input
                className={styles.input}
                placeholder="Number"
                name="number"
                type="text"
                value={number}
                onChange={onChange}
            />
        </div>
    );
};

export default EditContact;
