import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Errorpage from "../Pages/ErrorPage/Errorpage";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Product/Product";
import Main from "../LayOut/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import MyProduct from "../Pages/MyProduct/MyProduct";
import Dashboard from "../LayOut/Dashboard";

import ProductDetails from "../Pages/Product/Featured/ProductDetails";
import AddHomeProduct from "../Pages/AddHomeProduct/AddHomeProduct";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";
import Payment from "../Pages/Dashboard/MyProfile/Payment";
import DashboardAdd from "../Pages/Dashboard/AddProducts/DashboardAdd";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: '/product',
        element: <Product></Product>
      },
      {
        path: '/productDetails/:id',
        element: <ProductDetails></ProductDetails>
      },
      
      {
        path: '/addHomeProduct',
        element: <AddHomeProduct></AddHomeProduct>
      }

    ]
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'myProfile',
        element: <MyProfile></MyProfile>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'myproducts',
        element: <MyProduct></MyProduct>
      },
      {
        path: 'addProduct',
        element: <DashboardAdd></DashboardAdd>
      }
    ]
  }
]);