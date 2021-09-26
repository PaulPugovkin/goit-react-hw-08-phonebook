import { useSelector } from 'react-redux';

import Section from './Components/Section';
import AddForm from './Components/AddForm';
import UserPhoneBook from './Components/UserPhonebook';
import { Navigation } from './Components/Navigation/Navigation';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'react-loader-spinner';

function App() {
    const { isLoading, onError } = useSelector(state => state.contacts);
    const { error } = useSelector(state => state.auth);
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
            <UserPhoneBook />
            {onError !== '' ||
                (error !== '' && (
                    <ToastContainer>
                        {toast.error(onError || error)}
                    </ToastContainer>
                ))}
        </Section>
    );
}

export default App;
