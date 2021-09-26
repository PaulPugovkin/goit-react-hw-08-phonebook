import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/authorization/auth-operations';
import { useHistory } from 'react-router';

const LoginForm = ({ onClose }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const initialState = {
        email: null,
        password: null,
    };

    const [userData, setUserData] = useState(initialState);

    const handleChange = e => {
        setUserData(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        try {
            dispatch(login(userData));
            setUserData(initialState);
            onClose();
            history.push('/');
        } catch (error) {}
    };
    return (
        <div>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input
                        name="email"
                        onChange={handleChange}
                        prefix={
                            <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="email@mail.com"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        name="password"
                        onChange={handleChange}
                        prefix={
                            <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                </Form.Item>

                <Form.Item>
                    <Button
                        onClick={handleSubmit}
                        type="primary"
                        className="login-form-button"
                    >
                        Log in
                    </Button>
                    Or <Link to="/register">register now!</Link>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginForm;
