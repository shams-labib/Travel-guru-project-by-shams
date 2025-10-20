
import Errorpage from "../components/Errorpage";
import Home from "../Pages/Home";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";

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
    }
])