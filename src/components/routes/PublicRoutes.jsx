import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import ErrorPage from '../extra/ErrorPage';
import Home from '../layouts/Home';
import Menu from '../mainComponents/Menu';
import Order from '../mainComponents/Order';
import Login from '../mainComponents/Login';
import Register from '../mainComponents/Register';
import PrivateRoute from './PrivateRoute';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: 'order',
                element: <PrivateRoute><Order></Order></PrivateRoute>
            },
            {
                path: 'order/:category',
                element: <PrivateRoute><Order></Order></PrivateRoute>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;