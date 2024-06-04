import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext.tsx';
import { message } from 'antd';

interface Credentials {
    username: string;
    password: string;
}

const useLogin = () => {
    const { login } = useAuth();
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const loginUser = async (values: Credentials) => {
        try {
            setError('');
            setLoading(true);
            const res = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(values)
            })

            const data = await res.json();
            if (res.status === 200) {
                message.success(data.message);
                login(data.token, data.user)
            }
            else if (res.status === 401) {
                setError(data.message)
            }
            else if (res.status === 404) {
                setError(data.message)
            } else {
                message.error('Проблем с входа')
            }
        } catch (err) {
            if (err instanceof Error) {
                message.error(err.message);
            } else {
                message.error('Грешка');
            }
        } finally {
            setLoading(false)
        }
    };

    return { loading, error, loginUser }
}

export default useLogin
