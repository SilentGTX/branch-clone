import { type MenuProps } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';

import SearchCustomer from './SearchCustomer';
import { MenuDividerType } from 'antd/es/menu/interface';

interface MainMenuProps {
    collapsed: boolean;
    setCollapsed: (value: boolean) => void;
}

const MainMenu = ({ collapsed, setCollapsed }: MainMenuProps) => {
    const searchCustomer = SearchCustomer({ collapsed, setCollapsed }) || [];

    const dividerItem: MenuDividerType = {
        key: 'divider',
        type: 'divider',
    };

    const otherMenuItems: MenuProps['items'] = [
        {
            key: 'User',
            icon: <UserOutlined />,
            label: 'User',
            children: new Array(4).fill(null).map((_, j) => ({
                key: `sub2-option${j + 1}`,
                label: `option${j + 1}`,
            })),
        },
        {
            key: 'sub3',
            icon: <LaptopOutlined />,
            label: 'Laptop',
            children: new Array(4).fill(null).map((_, j) => ({
                key: `sub3-option${j + 1}`,
                label: `option${j + 1}`,
            })),
        },
        {
            key: 'sub4',
            icon: <NotificationOutlined />,
            label: 'Notifications',
            children: new Array(4).fill(null).map((_, j) => ({
                key: `sub4-option${j + 1}`,
                label: `option${j + 1}`,
            })),
        },
    ];

    const menuItems: MenuProps['items'] = [
        ...searchCustomer,
        dividerItem,
        ...otherMenuItems
    ];

    return menuItems;
};

export default MainMenu;
