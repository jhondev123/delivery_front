import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Login from '../pages/Login';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth';

interface AuthContextType {
    user: any;
    login: (email: string, password: string) => void;
    logout: () => void;
    isAuthenticated: () => boolean;
}
const Private = ({ Item }: { Item: React.FC }) => {
    const { isAuthenticated } = useContext(AuthContext) as AuthContextType;

    return isAuthenticated() ? <Item /> : <Navigate to="/login" />;
};

const RoutesApp: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Verifica se o usuário está logado antes de acessar rotas privadas */}
                <Route path="/" element={<Private Item={Home} />} />
                <Route path="/products" element={<Private Item={Products} />} />

                {/* Rota de login pública */}
                <Route path="/login" element={<Login />} />

                {/* Redireciona para login se a rota não for encontrada */}
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesApp;