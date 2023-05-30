import React, { useContext } from 'react';
import { DataProvider } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loader} = useContext(DataProvider);
    const location = useLocation();

    if (loader) {
        return <button className="btn loading md:my-96 md:ml-[43rem]">loading</button>
    }
    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;