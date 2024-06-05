import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface UserDataInterface {
    username: string;
    role: string;
}

interface AuthContextType {
    token: string;
    userData: UserDataInterface;
    isAuthenticated: boolean;
    isAdmin: boolean;
    login: (newToken: string, newData: UserDataInterface) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [token, setToken] = useState<string>('');
    const [userData, setUserData] = useState<UserDataInterface>({ username: '', role: '' });
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('user_data') || '{}');
        if (storedData.userToken && storedData.user) {
            const { userToken, user } = storedData;
            setToken(userToken);
            setUserData(user);
            setIsAuthenticated(true);
            if (user.role === 'admin') {
                setIsAdmin(false);
            }
        }
    }, []);

    const login = (newToken: string, newData: UserDataInterface) => {
        localStorage.setItem(
            'user_data',
            JSON.stringify({ userToken: newToken, user: newData })
        );

        setToken(newToken);
        setUserData(newData);
        setIsAuthenticated(true);
        if (newData.role === 'admin') {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    };

    const logout = () => {
        localStorage.removeItem('user_data');
        setToken('');
        setUserData({ username: '', role: '' });
        setIsAuthenticated(false);
        setIsAdmin(false);
    };

    return (
        <AuthContext.Provider
            value={{ token, isAuthenticated, isAdmin, login, logout, userData }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
