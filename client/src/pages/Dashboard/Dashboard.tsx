import React from 'react';
import './Dashboard.css';

import NavbarTop from '../../components/Navbars/NavbarTop';
import NavbarSide from '../../components/Navbars/NavbarSide';
import { ConfigProvider, Layout } from 'antd';
import DashboardContent from './DashboardContent';

const Dashboard: React.FC = () => {

    const DashboardLayout: React.FC = () => {
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
                    <NavbarSide />
                    <DashboardContent />
                </Layout>
            </ConfigProvider>
        );
    };



    return (
        <div className='dashboard'>
            <Layout style={{ minHeight: '100vh' }}>
                <NavbarTop />
                <DashboardLayout />
            </Layout>
        </div>
    );
}

export default Dashboard;
