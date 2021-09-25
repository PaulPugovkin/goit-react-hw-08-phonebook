import { Form, Input, Button } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { signUpNewUser } from '../../redux/authorization/auth-operations';

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const RegistrationForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({});

    const handleChange = e => {
        setUserData(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        try {
            dispatch(signUpNewUser(userData));
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <Form
            {...formItemLayout}
            // form={form}
            name="register"
            // onFinish={onFinish}
            scrollToFirstError
        >
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input name="email" onChange={handleChange} />
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password name="password" onChange={handleChange} />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(
                                new Error(
                                    'The two passwords that you entered do not match!',
                                ),
                            );
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="nickname"
                label="Nickname"
                tooltip="What do you want others to call you?"
                rules={[
                    {
                        required: true,
                        message: 'Please input your nickname!',
                        whitespace: true,
                    },
                ]}
            >
                <Input name="name" onChange={handleChange} />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" onClick={handleSubmit}>
                    Register
                </Button>
            </Form.Item>
        </Form>
    );
};

export default RegistrationForm;
