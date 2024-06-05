import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Image, Menu, ConfigProvider } from 'antd';

import logo from '../../assets/logo.png';
import logoText from '../../assets/logo-white.png';
import './Navbars.css';

import TopMenu from '../../menus/TopMenu/TopMenu';


const { Header } = Layout;

const NavbarTop: React.FC = () => {

    const topMenuItems = TopMenu();




    return (
        <ConfigProvider
            theme={{
                token: {
                    borderRadius: 10,
                    colorBgContainer: 'white',
                },
                components: {
                    Menu: {
                        itemSelectedBg: '#013371',
                        itemSelectedColor: 'white',
                        iconSize: 14
                    },
                },
            }}
        >
            <Header style={{ display: 'flex', alignItems: 'center', backgroundColor: '#013371' }}>
                <Link to="/dashboard">
                    <div className="navbar-brand">
                        <Image preview={false} src={logo} height={30} />
                        <Image className='logo-text' preview={false} src={logoText} height={30} />
                    </div>
                </Link>
                <Menu
                    mode="horizontal"
                    defaultSelectedKeys={['']}
                    items={topMenuItems}
                    style={{
                        flex: 1,
                        minWidth: 0,
                        justifyContent: 'flex-end',
                        backgroundColor: '#013371',
                    }}
                />
            </Header>
        </ConfigProvider>
    );
}

export default NavbarTop;
