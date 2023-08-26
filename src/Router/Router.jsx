import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Home/Menu/Menu";
import Order from "../Pages/Home/Menu/Order/Order";
import Login from "../Pages/Home/Home/Login";
import Registration from "../Pages/Home/Home/Registration";
import PrivateRoute from "./PrivateRoute";
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
        },
        {
          path:'menu',
          element:<Menu></Menu>
        },{
          path:'order/:category',
          element:<PrivateRoute><Order></Order></PrivateRoute>
        },
        {
          path:'login',
          element:<Login></Login>
        },{
          path:'registration',
          element:<Registration></Registration>
        }
      ]
    },
  ]);
  export default router;