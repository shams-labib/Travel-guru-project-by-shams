import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../AuthContext/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
  const {SignInUser, setUser} = useContext(AuthContext)
  const navigate = useNavigate();
  const handleLogin = (e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    SignInUser(email, password).then(result =>{
      const user = result.user;
      setUser(user);
      toast.success("Login Success");
      e.target.reset()
      navigate('/')
    }).catch(err => {
      console.log(err);
      toast.error("Something went wrong")
    })


  }


    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='text-4xl font-bold text-center mt-10'>Login Now</h1>
      <div className="card-body">
      <form onSubmit={handleLogin}>
          <fieldset className="fieldset">
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
          className="input  outline-none focus:outline-none focus:ring-1 focus:ring-blue-400" 
          placeholder="Enter your password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>

          <p>Don't have any account ? <Link to={'/auth/register'} className='text-blue-400 font-bold hover:text-blue-900'>Register</Link></p>
        </fieldset>
      </form>
      </div>
    </div>
        </div>
    );
};

export default Login;