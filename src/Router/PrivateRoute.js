import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return <div className="flex justify-center items-center w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-500"></div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
  
};

export default PrivateRoute;