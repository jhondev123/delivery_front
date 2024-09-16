import React, { createContext, useEffect, useState, ReactNode } from 'react';
import api from '../config/axios'; 

interface AuthContextType {
    user: any;
    login: (email: string, password: string) => void;
    logout: () => void;
    isAuthenticated: () => boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const userToken = localStorage.getItem('token');
        if (userToken) {
            setUser({ token: userToken });
            // Aqui você pode fazer uma chamada para validar o token
            // api.get('/api/verify-token') ou algo similar
        }
    }, []);

    const login = (email: string, password: string) => {
        api.post('/login', { email, password })
            .then(response => {
                const { token } = response.data;
                localStorage.setItem('token', token);
                setUser({ token });
            })
            .catch(error => {
                console.error('Login falhou', error);
            });
    };

    const logout = () => {
        localStorage.removeItem('user_token');
        setUser(null);
        navigate('/login');
    };

    const isAuthenticated = () => {
        return !!user;
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;