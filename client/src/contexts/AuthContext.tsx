import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface AuthContextType {
    token: string | null;
    userData: object | null;
    isAuthenticated: boolean;
    isAdmin: boolean;
    login: (newToken: string, newData: object) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [token, setToken] = useState<string | null>(null);
    const [userData, setUserData] = useState<object | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('user_data') || '{}');
        if (storedData.userToken && storedData.user) {
            const { userToken, user } = storedData;
            setToken(userToken);
            setUserData(user);
            setIsAuthenticated(true);
        }
    }, []);

    const login = (newToken: string, newData: { role: string; username: string; }) => {
        localStorage.setItem(
            'user_data',
            JSON.stringify({ userToken: newToken, user: newData })
        );

        if (newData.role === 'admin') {
            setIsAdmin(true)
        }

        setToken(newToken);
        setUserData(newData);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('user_data');
        setToken(null);
        setUserData(null);
        setIsAuthenticated(false);
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