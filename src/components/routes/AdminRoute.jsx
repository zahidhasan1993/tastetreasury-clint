import React from 'react';
import useAuth from '../../customHooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../customHooks/useAdmin';

const AdminRoute = ({children}) => {
    const {user,loader} = useAuth();
    const {admin, isLoading} = useAdmin();
    const location = useLocation();

    if (loader || isLoading) {
        return <button className="btn loading md:my-96 md:ml-[43rem]">loading</button>
    }
    if (user && admin) {
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoute;