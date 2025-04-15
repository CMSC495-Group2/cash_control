// src/components/AuthButton.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AuthButton = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Determine whether the current page is the login page
    const isLoginPage = location.pathname === '/login';
    const buttonText = isLoginPage ? 'LOGIN' : 'LOGOUT';

    const handleClick = () => {
        if (isLoginPage) {
            navigate('/user-portal/:id');
        } else {
            // LOGOUT should navigate back to the login page.
            navigate('/login');
        }
    };

    return (
        <button onClick={handleClick}>
            {buttonText}
        </button>
    );
};

export default AuthButton;
