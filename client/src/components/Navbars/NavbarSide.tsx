import React, { useState } from 'react';
import { Layout, Menu, type MenuProps } from 'antd';

import './Navbars.css';

import MainMenu from '../../menus/MainMenu/MainMenu';

const { Sider } = Layout;

const NavbarSide: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    const mainMenuItems: MenuProps['items'] = MainMenu({ collapsed, setCollapsed });

    return (

        <Sider
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            collapsible
            width={200}
        >
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                items={mainMenuItems}
            />
        </Sider>

    );
}

export default NavbarSide;
