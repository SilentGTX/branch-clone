import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext.tsx';
import { message } from 'antd';

interface Credentials {
  username: string;
  password: string;
  passwordConfirm: string;
}

const useSignup = () => {
  const { login } = useAuth();
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const registerUser = async (values: Credentials) => {
    if (values.password !== values.passwordConfirm) {
      return setError('Паролите не са еднакви')
    }

    try {
      setError('');
      setLoading(true);
      const res = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(values)
      })

      const data = await res.json();
      if (res.status === 201) {
        message.success(data.message);
        login(data.token, data.user)
      }
      else if (res.status === 400) {
        setError(data.message)
      } else {
        message.error('Проблем с регистрацията')
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

  return { loading, error, registerUser }
}

export default useSignup
