import { Card, Flex, Typography, Form, Input, Button, Layout, Alert, Spin } from 'antd'
import './Login.css'
import useLogin from '../../hooks/useLogin'

import { Link } from 'react-router-dom'


function Login() {
    const { loading, error, loginUser } = useLogin();
    const handleLogin = (values: { username: string; password: string; }) => {
        loginUser(values)
    }

    return (
        <>
            <nav className="navbar">
                <Layout>
                    <Layout.Header className="nav-header">
                        <Link to="/login">
                            <div className="logo" />
                        </Link>
                    </Layout.Header>
                </Layout>
            </nav >
            <div className="register">
                <Card className="form-container">
                    <Flex gap='large' vertical flex={1}>
                        <Typography.Title level={4} className="header">Административен модул</Typography.Title>
                        <Form layout='vertical' onFinish={handleLogin} autoComplete='off'>
                            <Form.Item label="Потребителско име" name="username" rules={[]}>
                                <Input placeholder=""></Input>
                            </Form.Item>

                            <Form.Item label="Парола" name="password" rules={[]}>
                                <Input.Password placeholder=""></Input.Password>
                            </Form.Item>
                            {error && (
                                <Alert
                                    description={error}
                                    type='error'
                                    showIcon
                                    closable
                                    className='alert'
                                />
                            )}
                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType='submit'
                                    size='large'
                                    className='btn-register'
                                >
                                    {loading ? <Spin /> : 'Вход'}
                                </Button>
                            </Form.Item>
                        </Form>
                    </Flex>
                </Card >
            </div>
        </>
    )
}

export default Login
