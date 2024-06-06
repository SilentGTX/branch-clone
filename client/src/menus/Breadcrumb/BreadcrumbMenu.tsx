import { Link } from 'react-router-dom';

const BreadcrumbMenu = () => {


    const breadcrumb = {
        items: [
            {
                path: '/dashboard',
                title: 'Начало'
            },
            {
                path: '/manage-customer',
                title: 'Управление на клиент'
            }
        ],
        render: // eslint-disable-next-line @typescript-eslint/no-explicit-any
            function breadcrumbRender(currentRoute: any, items: any) {
                const isLast = currentRoute?.path === items[items.length - 1]?.path;

                return isLast ? (
                    <span>{currentRoute.title}</span>
                ) : (
                    <Link to={currentRoute.path}>{currentRoute.title}</Link>
                );
            }
    }

    return (
        breadcrumb
    )
}

export default BreadcrumbMenu
