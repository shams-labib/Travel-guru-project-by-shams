import React from 'react';
import Login from '../Firebase/Login/Login';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const AuthLayout = () => {
    return (
        <div className='bg-gradient-to-r from-[#4facfe] via-[#00f2fe] to-[#f093fb] min-h-screen'>
            <nav className='max-w-9/12 mx-auto'>
                <Navbar>

                </Navbar>
            </nav>
            
            <div className=''>
                <Outlet></Outlet>
            </div>
            <ToastContainer position='top-center'></ToastContainer>
        </div>
    );
};

export default AuthLayout;