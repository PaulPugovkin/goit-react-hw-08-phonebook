import { Menu, Dropdown, Button, Space } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router';
import './Navigation.css';
import SignForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegisterForm/RegisterForm';
import { Modal } from 'antd';
import { useHistory } from 'react-router';

export const Navigation = () => {
    const history = useHistory();
    console.log(history);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        history.push('/');
    };
    const menu = (
        <Menu>
            <Menu.Item onClick={showModal}>
                {<Link to="/sign-in">Sign in</Link>}
            </Menu.Item>
            <Menu.Item onClick={showModal}>
                {<Link to="/sign-up">Sign up</Link>}
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
                <Route path="/sign-in" component={SignForm} />
                <Route path="/sign-up" component={RegistrationForm} />
            </Modal>
            ,
        </div>
    );
};
