import type { MenuProps } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useAuth } from '../../contexts/AuthContext';

const TopMenu = () => {
    const { userData, logout } = useAuth();

    const menuItems: MenuProps['items'] = [
        {
            key: 'sub1',
            label: <span style={{ color: 'white' }}>{userData.username.toUpperCase()}</span>,
            icon: <UserOutlined style={{ color: 'white' }} />,
            children: [
                {
                    type: 'group',
                    key: 'Profile',
                    label: 'Профил',
                    children: [
                        { label: 'Option 1', key: 'setting:1' },
                        { label: 'Option 2', key: 'setting:2' },
                    ],
                },
                {
                    key: 'Logout',
                    label: <span onClick={logout}>Изход</span>
                },
            ],
        },
    ];

    return (
        menuItems
    );
};

export default TopMenu;
