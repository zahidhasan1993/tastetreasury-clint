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
import Dreview from "../dashboardComponents/Dreview";
import Dbooking from "../dashboardComponents/Dbooking";
import AllUsers from "../dashboardComponents/admin/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItems from "../dashboardComponents/admin/AddItems";
import ManageItems from "../dashboardComponents/admin/ManageItems";
import Dpaymenthistory from "../dashboardComponents/Dpaymenthistory";
import Dpayment from "../dashboardComponents/Dpayment";
import AdminHome from "../dashboardComponents/admin/AdminHome";

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
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "home",
        element: <Dhome></Dhome>,
      },
      {
        path: "reservation",
        element: <Dreservation></Dreservation>,
      },
      {
        path: "cart",
        element: <Dcart></Dcart>,
      },
      {
        path: "paymenthistory",
        element: <Dpaymenthistory></Dpaymenthistory>
      },
      {
        path: "review",
        element: <Dreview></Dreview>,
      },
      {
        path: "booking",
        element: <Dbooking></Dbooking>,
      },
      {
        path: 'payment',
        element: <Dpayment></Dpayment>
      },
      //admin routes
      {
        path: "allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "additem",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: "manageitems",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path: "adminhome",
        element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
      }
    ],
  },
]);

export default router;
