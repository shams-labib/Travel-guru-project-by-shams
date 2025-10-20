import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../AuthContext/AuthContext';
import { toast } from 'react-toastify';
import Loading from '../../Loading/Loading';

const Register = () => {

  const navigate = useNavigate()
  const [nameError, setNameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const {createUser, setUser, updateProfileFunc, signInOut, loading} = useContext(AuthContext);

    const handleRegister = (e)=>{
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      const name = e.target.name.value.trim();
      const photo  = e.target.photo.value;

      if(name.length <6){
        setNameError('Name must be Name must be at least 6 characters long. character ');
        return;
      }else if(password.length < 6){
        setPasswordError("Password must be at least 6 characters.")
        return;
      }

      if(loading){
        return <Loading></Loading>
      }
  
      createUser(email, password).then(result =>{
        const user = result.user;
        updateProfileFunc(name, photo).then(()=>{
          setUser({...user, displayName : name, photoURL: photo});
          signInOut().then(()=>{
            navigate("/auth/login")
          })
          toast.success("Account Created Success");
        }).catch(err=>{
          console.log(err);
          toast.error("Profile update failed")
        })
      }).catch(err => {
        console.log(err);
        toast.error("Something went wrong")
      })
  
  
    }

    return (
       <div className='flex flex-col justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='text-4xl font-bold text-center mt-10'>Create an account</h1>
      <div className="card-body">
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
          <label className="label">Name</label>
          <input
          name='name' 
          type="text" 
          className="input outline-none focus:outline-none focus:ring-1 focus:ring-blue-400" 
          placeholder="Your name" />
          <p className='text-red-500'>{nameError}</p>
          <label className="label">Photo URL</label>
          <input
          name='photo' 
          type="text" 
          className="input outline-none focus:outline-none focus:ring-1 focus:ring-blue-400" 
          placeholder="Photo URL" />
          <label className="label">Email</label>
          <input 
          name='email'
          type="email" 
          className="input outline-none focus:outline-none focus:ring-1 focus:ring-blue-400" 
          placeholder="Email" />
          <label className="label">Password</label>
          <input 
          name='password'
          type="password" 
          className="input outline-none focus:outline-none focus:ring-1 focus:ring-blue-400" 
          placeholder="Password" />
          <p className='text-red-500'>{passwordError}</p>
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>

          <p>Already have account ? <Link to={'/auth/login'} className='text-blue-400 font-bold hover:text-blue-900'>LogIn</Link></p>
        </fieldset>
        </form>
      </div>
    </div>
        </div>
    );
};

export default Register;