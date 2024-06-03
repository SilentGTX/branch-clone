import { Card, Flex, Typography, Form, Input, Button, Layout } from 'antd'
import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import i18next from 'i18next'
i18next.init({
    fallbackLng: 'en',
    resources: {
        en: {
            translation: {
                key: "hello world"
            },
            common: {
                sign: "Sign in"
            }
        },
        bg: {
            translation: {
                key: 'здрасти'
            },
            common: {
                sign: "Вход"
            }
        }
    }
})



const Register = () => {
    const handleRegister = (values) => {
        //console.log(values);
        console.log(i18next.t('common:sign', { lng: 'bg' }));

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
                            <Form.Item label="Потребителско име" name="name" rules={[{
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
                            <Form.Item>
                                <Button type="primary" htmlType='submit' size='large' className='btn-register'>Създай акаунт</Button>
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
