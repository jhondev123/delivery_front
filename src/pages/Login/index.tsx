import React, { useState, useContext } from 'react';
import AuthContext from '../../contexts/auth';

interface AuthContextType {
    user: any;
    login: (email: string, password: string) => void;
    logout: () => void;
    isAuthenticated: () => boolean;
}
const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext) as AuthContextType;

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        login(email, password);
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
