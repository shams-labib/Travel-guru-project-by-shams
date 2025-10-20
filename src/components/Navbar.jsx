import React from 'react';
import logo from '../assets/images/logo.png'
import { NavLink } from 'react-router';

const Navbar = () => {

    const links = <>
    <NavLink>News</NavLink>
    <NavLink>Destination</NavLink>
    <NavLink>Blog</NavLink>
    <NavLink>Contact</NavLink>
    </>

    return (
        <div className=" flex justify-around  items-center py-3">
  <div className="start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
   <div className=''>
    <img className='w-[100px] h-[50px] filter  invert brightness-0' src={logo} alt="" />
   </div>
  </div>
  <div className="search">
  <label className="flex items-center w-80 bg-white/20 border border-white rounded-md px-3 py-2">
    <svg
      className="h-5 w-5 text-white/50 mr-2"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8" strokeWidth="2"></circle>
      <path d="m21 21-4.3-4.3" strokeWidth="2"></path>
    </svg>
    <input
      type="search"
      placeholder="Search your destination..."
      className="bg-transparent  outline-none focus:outline-none placeholder-white/50 text-white/80 w-full"
    />
  </label>
</div>

  <div className="center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white gap-10 font-semibold">
      {links}
    </ul>
  </div>
  <div className="end-btn">
    <a className="btn text-white bg-[#F9A51A] px-7 border-none">LogIn</a>
  </div>
</div>
    );
};

export default Navbar;