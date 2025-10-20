import React, { useContext } from 'react';
import logo from '../assets/images/logo.png'
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Firebase/AuthContext/AuthContext';
import { FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Navbar = () => {

  const {user, signInOut} = useContext(AuthContext);

  const handleSignOut = ()=>{
         signInOut().then(
          toast.success("Log Out Success")
         ).catch(err => {
          toast.error(err.message)
         })
  }

    const links = <>
    <NavLink to={'/'}>Home</NavLink>
    <NavLink>Destination</NavLink>
    <NavLink>Blog</NavLink>
    <NavLink>Contact</NavLink>
    </>

    return (
        <div className=" flex justify-between  items-center py-3">
  <div className="start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52  shadow">
        {links}
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
   {
    user ? <div className='flex gap-3 items-center'>
      <div>
        {user.photoURL
  ? <img src={user.photoURL} alt="User" className="w-10 h-10 rounded-full" />
  : <FaUser size={30} />
}

      </div>
      <div>
      <button className="btn" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
  Account
</button>

<ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
  popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */ }>
  <li><a className='font-semibold'>{user ? user.displayName : ""}</a></li>
  <li><a className='font-semibold'>{user ? user.email : ''}</a></li>
  <button onClick={handleSignOut} className='px-3 py-2 text-white rounded-lg cursor-pointer shadow-sm transition-transform duration-300 hover:-translate-y-0.5 bg-blue-300'>LogOut</button>
</ul>
    </div>
    </div> :  <Link to={'/auth/login'} className="btn text-white bg-[#F9A51A] px-7 border-none">LogIn</Link>
   }
  </div>
</div>
    );
};

export default Navbar;