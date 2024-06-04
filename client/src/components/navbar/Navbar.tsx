import { Layout, Image, Menu, Breadcrumb, ConfigProvider } from 'antd';
const { Header, Content, Sider, Footer } = Layout;
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

import { useAuth } from '../../contexts/AuthContext';
import './Navbar.css';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import logoText from '../../assets/logo-white.png';
import React from 'react';


const Navbar = () => {

    const { logout } = useAuth()

    const topHeaderMenuItems: MenuProps['items'] = [{ name: 'BBIVAN', icon: UserOutlined }].map((menuItem, index) => {
        const key = String(index + 1)

        return {
            key: `sub${key}`,
            label: `${menuItem.name}`,
            icon: React.createElement(menuItem.icon),
            children: [
                {
                    type: 'group',
                    key: `Profile`,
                    label: `${'Профил'}`,
                    children: [
                        { label: 'Option 1', key: 'setting:1' },
                        { label: 'Option 2', key: 'setting:2' },
                    ],
                },
                {
                    key: 'Logout',
                    label: <span onClick={logout}>Изход</span>
                },
            ]

        }
    })

    const breadcrumbItems = [
        {
            path: '/dashboard',
            title: 'Начало'
        },
        {
            path: '/account',
            title: 'Акаунт'
        },
        {
            title: 'test'
        }
    ]

    const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
        const key = String(index + 1);
        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,
            items: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                }
            }),
        };
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function breadcrumbRender(currentRoute: any, items: any) {
        const isLast = currentRoute?.path === items[items.length - 1]?.path;

        return isLast ? (
            <span>{currentRoute.title}</span>
        ) : (
            <Link to={currentRoute.path}>{currentRoute.title}</Link>
        );
    }


    return (

        <ConfigProvider
            theme={{
                token: {

                    colorPrimary: '#013371',
                    borderRadius: 10,
                    colorBgContainer: 'white',
                },
                components: {
                    Layout: {
                        triggerBg: "white",
                        triggerColor: 'black'
                    },
                    Menu: {
                        darkItemBg: "red"
                    }
                },
            }}
        >



            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <Header
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: '#013371',
                    }}
                >
                    <Link to="/dashboard">
                        <div className="navbar-brand">
                            <Image
                                preview={false}
                                src={logo}
                                height={30}
                            ></Image>
                            <Image
                                className='logo-text'
                                preview={false}
                                src={logoText}
                                height={30}
                            ></Image>
                        </div>
                    </Link>

                    <Menu
                        theme='dark'
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        items={topHeaderMenuItems}
                        style={{
                            flex: 1,
                            minWidth: 0,
                            justifyContent: 'flex-end',
                            backgroundColor: '#013371',
                        }}
                    >
                    </Menu>
                </Header>
                <Layout>
                    <Sider
                        className='fib-blue'
                        collapsible
                        width={200}
                        style={{
                            background: 'red',
                        }}
                    >
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{
                                height: '100%',
                                borderRight: 0,
                            }}
                            items={items2}
                        />
                    </Sider>
                    <Layout
                        style={{
                            padding: '0 24px 24px',
                        }}
                    >
                        <Breadcrumb
                            style={{
                                margin: '16px 0',
                            }}
                            items={breadcrumbItems}
                            itemRender={breadcrumbRender}
                        >
                        </Breadcrumb>
                        <Content
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                                background: 'white',
                                borderRadius: 20,
                            }}
                        >
                            Content
                        </Content>
                        <Footer
                            style={{
                                textAlign: 'center',
                            }}
                        >
                            EBranch ©{new Date().getFullYear()}  by Vanko
                        </Footer>
                    </Layout>
                </Layout>
            </Layout >
        </ConfigProvider >
    )

}

export default Navbar; 