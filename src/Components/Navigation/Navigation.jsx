import { Menu, Dropdown, Button, Space } from 'antd';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Route, useHistory } from 'react-router';
import './Navigation.css';
import RegistrationForm from '../RegisterForm/RegisterForm';
import LoginForm from '../LoginForm/LoginForm';
import { Modal } from 'antd';
import { useSelector } from 'react-redux';
import { logout } from '../../redux/authorization/auth-operations';
import { useDispatch } from 'react-redux';

export const Navigation = () => {
    const dispatch = useDispatch();
    const { isLoggedIn, user } = useSelector(state => state.auth);
    const history = useHistory();

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        history.push('/');
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    useEffect(() => {
        if (history.location.pathname !== '/') setIsModalVisible(true);
    }, [history.location]);

    const menu = (
        <Menu>
            {!isLoggedIn && (
                <>
                    <Menu.Item onClick={showModal} key="Login">
                        {<Link to="/login">Login</Link>}
                    </Menu.Item>
                    <Menu.Item onClick={showModal} key="Sign up">
                        {<Link to="/register">Sign up</Link>}
                    </Menu.Item>
                </>
            )}

            {isLoggedIn && (
                <Menu.Item key="Logout">
                    {
                        <button type="button" onClick={handleLogout}>
                            Logout
                        </button>
                    }
                </Menu.Item>
            )}
        </Menu>
    );

    return (
        <div>
            <Space direction="vertical">
                <Space wrap>
                    <Dropdown
                        overlay={menu}
                        placement="topRight"
                        className="test"
                    >
                        <Button>{isLoggedIn ? user.name : 'Account'}</Button>
                    </Dropdown>
                </Space>
            </Space>
            <Modal
                visible={isModalVisible}
                // onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <Route path="/login" onLoad={() => showModal()}>
                    <LoginForm onClose={handleCancel} />
                </Route>
                <Route path="/register">
                    <RegistrationForm onClose={handleCancel} />
                </Route>
            </Modal>
            ,
        </div>
    );
};
