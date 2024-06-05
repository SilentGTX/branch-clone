import { SearchOutlined } from '@ant-design/icons';
import { InputRef, MenuProps } from 'antd';
import { type SearchProps } from 'antd/es/input/Search';
import Search from 'antd/es/input/Search';
import { useEffect, useRef, useState } from 'react';

interface MainMenuProps {
    collapsed: boolean;
    setCollapsed: (value: boolean) => void;
}

const SearchCustomer = ({ collapsed, setCollapsed }: MainMenuProps): MenuProps['items'] => {
    const inputRef = useRef<InputRef>(null);
    const isFirstRender = useRef(true);

    const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
        console.log(info?.source, value);
        inputRef.current!.focus({ cursor: 'start' });
    };

    const [searchFocus, setSearchFocus] = useState(false);

    useEffect(() => {
        if (!isFirstRender.current && !collapsed && searchFocus) {
            inputRef.current?.focus({ cursor: 'start' });
        }
        isFirstRender.current = false;
    }, [collapsed, searchFocus]);

    const searchCustomer = [
        {
            key: 'Search',
            label: <Search
                ref={inputRef}
                allowClear
                style={{ display: 'flex' }}
                placeholder="Търси клиент"
                onSearch={onSearch}
            />,
            style: {
                display: !collapsed ? 'block' : 'none',
                paddingLeft: undefined,
                padding: '5px',
                width: '95%',
            },
        },
        {
            key: 'SearchCollapsed',
            label: 'Търси клиент',
            icon: <SearchOutlined />,
            style: {
                display: collapsed ? 'block' : 'none',
            },
            onClick: () => {
                setCollapsed(false);
                setSearchFocus(true)
            },
        },
    ];

    return searchCustomer;
};

export default SearchCustomer;
