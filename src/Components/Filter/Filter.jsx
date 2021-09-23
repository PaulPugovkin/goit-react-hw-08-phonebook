import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/actions';
import styles from './Filter.module.css';

const Filter = () => {
    const value = useSelector(state => state.contacts.filter);
    const dispatch = useDispatch();

    const onFilterChange = e => dispatch(changeFilter(e.target.value));

    return (
        <div className={styles.wrapper}>
            <label>
                <span className={styles['label-text']}>Find contact:</span>
                <input
                    placeholder="Search contact"
                    className={styles.input}
                    type="text"
                    value={value}
                    onChange={onFilterChange}
                />
            </label>
        </div>
    );
};

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default Filter;
