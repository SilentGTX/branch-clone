import { Breadcrumb, Layout } from 'antd'
import { Content, Footer } from 'antd/es/layout/layout'
import BreadcrumbMenu from '../../menus/Breadcrumb/BreadcrumbMenu';

const DashboardContent: React.FC = () => {
    const breadcrumb = BreadcrumbMenu();

    return (
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
                Dashboard
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                EBranch ©{new Date().getFullYear()} by Vanko
            </Footer>
        </Layout>
    )
}

export default DashboardContent
