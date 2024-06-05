import './Dashboard.css'

import NavbarTop from '../../components/Navbars/NavbarTop';
import NavbarSide from '../../components/Navbars/NavbarSide';
import { Layout } from 'antd';





function Dashboard() {

    return (
        <div className='dashboard'>
            <Layout style={{ minHeight: '100vh' }}>
                <NavbarTop />
                <NavbarSide />
            </Layout>

        </div>
    )
}

export default Dashboard
