import React from 'react';
import bgImg from '../assets/images/Rectangle 1.png'
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div className='min-h-screen bg-cover bg-center bg-no-repeat relative ' style={{backgroundImage:`url(${bgImg})`}}>
           <div className='absolute inset-0 bg-black/50 z-0'> 
           </div>
           <div className='relative z-10 flex flex-col min-h-screen w-9/12 mx-auto'>
              <Navbar></Navbar>

              <main className='container mx-auto'>
                <Outlet></Outlet>
              </main>
           </div>
        </div>
    );
};

export default HomeLayout;