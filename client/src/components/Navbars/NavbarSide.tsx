import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, ConfigProvider, type MenuProps } from 'antd';

import './Navbars.css';

import MainMenu from '../../menus/MainMenu/MainMenu';
import BreadcrumbMenu from '../../menus/Breadcrumb/BreadcrumbMenu';

const { Content, Sider, Footer } = Layout;


const NavbarSide: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    const mainMenuItems: MenuProps['items'] = MainMenu({ collapsed, setCollapsed });
    const breadcrumb = BreadcrumbMenu();



    return (
        <ConfigProvider
            theme={{
                token: {
                    borderRadius: 10,
                    colorBgContainer: 'white',
                },
                components: {
                    Layout: {
                        triggerBg: "white !important",
                        triggerColor: 'black !important',
                    }
                },
            }}
        >
            <Layout>
                <Sider
                    collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
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
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb
                        style={{ margin: '16px 0' }}
                        items={breadcrumb.items}
                        itemRender={breadcrumb.render}
                    />
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
                    <Footer style={{ textAlign: 'center' }}>
                        EBranch ©{new Date().getFullYear()} by Vanko
                    </Footer>
                </Layout>
            </Layout>

        </ConfigProvider>
    );
}

export default NavbarSide
