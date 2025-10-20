
import Errorpage from "../components/Errorpage";
import Home from "../Pages/Home";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Firebase/Login/Login";
import Register from "../Firebase/Register/Register";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                path:'/',
                index:true,
                element:<Home></Home>,
            }
        ]
    },
    {
        path:'/auth',
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:'/auth/login',
                element:<Login></Login>
            },
            {
                path:"/auth/register",
                element:<Register></Register>
            }
        ]
    }
])