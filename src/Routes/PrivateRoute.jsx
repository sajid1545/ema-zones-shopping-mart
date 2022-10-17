import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './../Context/UserContext';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user,loading } = useContext(AuthContext);
    
    if (loading) {
        return <progress className="progress w-[50%] text-center"></progress>
    }

	if (user && user.email) {
		return children;
	}

	return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
