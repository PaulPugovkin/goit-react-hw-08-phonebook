import { useSelector } from 'react-redux';

import Section from './Components/Section';
import AddForm from './Components/AddForm';
import UserPhoneBook from './Components/UserPhonebook';
import Filter from './Components/Filter';
import { Navigation } from './Components/Navigation/Navigation';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'react-loader-spinner';

function App() {
    const { items, isLoading, onError } = useSelector(state => state.contacts);

    return (
        <Section>
            <Navigation />
            {isLoading && (
                <Loader
                    className="spinner"
                    type="Grid"
                    color="#00BFFF"
                    height={80}
                    width={80}
                />
            )}
            <AddForm />

            {items.length > 0 ? (
                <>
                    <Filter />
                    <UserPhoneBook />
                </>
            ) : (
                <h2>There is no contacts</h2>
            )}
            {onError !== '' && (
                <ToastContainer>{toast.error(onError)}</ToastContainer>
            )}
        </Section>
    );
}

export default App;
