import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../extra/ErrorPage";
import Home from "../layouts/Home";
import Menu from "../mainComponents/Menu";
import Order from "../mainComponents/Order";
import Login from "../mainComponents/Login";
import Register from "../mainComponents/Register";
import Dashboard from "../layouts/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Dhome from "../dashboardComponents/Dhome";
import Dreservation from "../dashboardComponents/Dreservation";
import Dcart from "../dashboardComponents/Dcart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order",
        element: <Order></Order>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: 
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>,
    children: [
      {
        path:'dhome',
        element: <Dhome></Dhome>
      },
      {
        path: 'reservation',
        element: <Dreservation></Dreservation>
      },
      {
        path: 'cart',
        element: <Dcart></Dcart>
      }
    ]
  },
]);

export default router;
