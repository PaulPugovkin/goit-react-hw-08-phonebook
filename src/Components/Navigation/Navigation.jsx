import { Menu, Dropdown, Button, Space } from 'antd';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router';
import './Navigation.css';
import SignForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegisterForm/RegisterForm';
import { Modal } from 'antd';
import { useHistory } from 'react-router';

export const Navigation = () => {
    const history = useHistory();

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        history.push('/');
    };
    useEffect(() => {
        if (history.location.pathname !== '/') setIsModalVisible(true);
    }, [history.location]);
    const menu = (
        <Menu>
            <Menu.Item onClick={showModal}>
                {<Link to="/login">Login</Link>}
            </Menu.Item>
            <Menu.Item onClick={showModal}>
                {<Link to="/register">Sign up</Link>}
            </Menu.Item>
            <Menu.Item>{<Link to="/">Logout</Link>}</Menu.Item>
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
                        <Button>Account</Button>
                    </Dropdown>
                </Space>
            </Space>
            <Modal
                visible={isModalVisible}
                // onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <Route
                    path="/login"
                    onLoad={() => showModal()}
                    component={SignForm}
                />
                <Route path="/register" component={RegistrationForm} />
            </Modal>
            ,
        </div>
    );
};
