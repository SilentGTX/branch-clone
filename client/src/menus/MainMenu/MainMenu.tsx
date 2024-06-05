import { type MenuProps } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined, SearchOutlined } from '@ant-design/icons';
import { type SearchProps } from 'antd/es/input/Search';
import Search from 'antd/es/input/Search';

interface MainMenuProps {
    collapsed: boolean;
}


const MainMenu = ({ collapsed }: MainMenuProps) => {

    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);


    const menuItems: MenuProps['items'] = [
        {
            key: 'Search',
            label: <Search
                style={{ display: 'flex' }}
                placeholder="Търси клиент"
                onSearch={onSearch}
            />,
            icon: collapsed ? <SearchOutlined /> : null,
            style: !collapsed ? {
                paddingLeft: undefined,
                padding: '5px',
                width: '95%'
            } : undefined,

        },
        {
            key: 'User',
            icon: <UserOutlined />,
            label: 'User',
            children: new Array(4).fill(null).map((_, j) => {
                const subKey = j + 1;
                return {
                    key: `sub2-option${subKey}`,
                    label: `option${subKey}`,
                };
            }),
        },
        {
            key: 'sub3',
            icon: <LaptopOutlined />,
            label: 'Laptop',
            children: new Array(4).fill(null).map((_, j) => {
                const subKey = j + 1;
                return {
                    key: `sub3-option${subKey}`,
                    label: `option${subKey}`,
                };
            }),
        },
        {
            key: 'sub4',
            icon: <NotificationOutlined />,
            label: 'Notifications',
            children: new Array(4).fill(null).map((_, j) => {
                const subKey = j + 1;
                return {
                    key: `sub4-option${subKey}`,
                    label: `option${subKey}`,
                };
            }),
        },
    ];


    return (
        menuItems
    );
};


export default MainMenu
