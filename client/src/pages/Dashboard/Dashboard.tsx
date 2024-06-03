import { Card, Flex, Typography, Form, Input, Button, Layout } from 'antd'
import React from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'

function Login() {
    const handleLogin = (values) => {
        console.log(values);

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
                            <Form.Item label="Потребителско име" name="name" rules={[]}>
                                <Input placeholder=""></Input>
                            </Form.Item>

                            <Form.Item label="Парола" name="password" rules={[]}>
                                <Input.Password placeholder=""></Input.Password>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType='submit' size='large' className='btn-register'>Вход</Button>
                            </Form.Item>
                        </Form>
                    </Flex>
                </Card >
            </div>
        </>
    )
}

export default Login
