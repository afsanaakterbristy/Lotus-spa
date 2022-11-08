import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return <h2 className="text-4xl">Loading....</h2>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
  
};

export default PrivateRoute;