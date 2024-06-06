import { ConfigProvider, Layout } from "antd"
import NavbarTop from "../../components/Navbars/NavbarTop"
import NavbarSide from "../../components/Navbars/NavbarSide"
import ManageCustomerContent from "./ManageCustomerContent"


const ManageCustomerLayout: React.FC = () => {
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
                <ManageCustomerContent />
            </Layout>
        </ConfigProvider>
    );
};

const ManageCustomer = () => {
    return (
        <div className='dashboard'>
            <Layout style={{ minHeight: '100vh' }}>
                <NavbarTop />
                <ManageCustomerLayout />
            </Layout>

        </div>
    )
}

export default ManageCustomer
