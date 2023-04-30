import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authProvider } from '../components/provider/AuthProvider';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(authProvider)

    const location = useLocation()
    console.log(location);

    if (loading) {
        return <p>Loading........</p>
    }

    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;