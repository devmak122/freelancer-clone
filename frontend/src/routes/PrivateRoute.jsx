import React from 'react';
import { Navigate } from 'react-router-dom';

const Private = ({ children }) => {
    const isAuthenticated = localStorage.getItem('token');
    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }
    return <>{children}</>;
};

export default Private;
