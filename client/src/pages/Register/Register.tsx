import { Card, Flex, Typography, Form, Input, Button, Layout, Spin, Alert } from 'antd'
import './Register.css'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup.ts'

const Register = () => {
    const { loading, error, registerUser } = useSignup();
    const handleRegister = (values: { username: string; password: string; passwordConfirm: string }) => {
        registerUser(values)
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
                        <Typography.Title level={4} className="header">Създаване на акаунт</Typography.Title>
                        <Form layout='vertical' onFinish={handleRegister} autoComplete='off'>
                            <Form.Item label="Потребителско име" name="username" rules={[{
                                required: true,
                                message: 'Моля въведете потребителско име'
                            }]}>
                                <Input placeholder=""></Input>
                            </Form.Item>

                            <Form.Item label="Парола" name="password" rules={[
                                {
                                    required: true,
                                    message: 'Моля въведете парола'
                                }
                            ]}>
                                <Input.Password placeholder=""></Input.Password>
                            </Form.Item>

                            <Form.Item label="Потвърждаване на паролата" name="passwordConfirm" rules={[
                                {
                                    required: true,
                                    message: 'Моля потвърдете паролата'
                                }
                            ]}>
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
                                    type={!loading ? 'primary' : undefined}
                                    htmlType='submit'
                                    size='large'
                                    className='btn-register'>
                                    {loading ? <Spin /> : 'Създай акаунт'}
                                </Button>
                            </Form.Item>
                            <Form.Item>
                                <Link to="/login">
                                    <Button htmlType='submit' size='large' className='btn-register'>Вход</Button>
                                </Link>
                            </Form.Item>
                        </Form>
                    </Flex>
                </Card >
            </div>
        </>
    )
}

export default Register
