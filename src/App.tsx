// src/App.tsx
import React from 'react';
import GlobalStyles from './styles/global';
import RoutesApp from './routes';
import { AuthProvider } from './contexts/auth';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <RoutesApp />
      </AuthProvider>
      <GlobalStyles />
    </>
  );
}

export default App;