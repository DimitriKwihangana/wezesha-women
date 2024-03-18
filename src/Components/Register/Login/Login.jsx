import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginUser } from '../../../features/authslice';
import { useDispatch, useSelector } from "react-redux";
import { Audio, ThreeDots } from "react-loader-spinner";


const Login = () => {
    const [password,setPassword] = useState('');
    const [email, setEmail] = useState('');
   
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isLoading = useSelector((state) => state.auth.isLoading);
 const handleLoginn = () => {
   if (email && password) {
     const data = {
       email: email,
       password: password,
     };

     dispatch(LoginUser(data, navigate));
   } else {
     Warn();
   }
 };
      const Warn = () =>
        toast.warning("Fill Everything", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
   
   
  return (
    <>
    <ToastContainer/>
    <div style={{background: '#FFFAF5'}} className=' w-full h-[50rem] py-[5rem]'>
        {/* <div className='bg-green-500  lg:w-[35rem] h-[35rem]  shadow-slate- shadow-2xl mx-auto my-auto pt-5 rounded-xl '> */}
            <div className=' lg:h-[33rem] lg:w-[33rem] w-[20rem] shadow-slate- shadow-2xl mx-auto rounded-xl pt-5'>
                <h1 className='font-semibold text-3xl mx-10 mt-5 lg:flex justify-center'>Login</h1>
                <p className='mx-10 mb-5 mt-3 lg:flex lg:justify-center '>Doesnt have an account yet? 
                    <Link to="/signUp" className='text-orange-700 lg:ml-[4rem]  underline '>
                        Sign Up
                    </Link>
                </p>
                <div className='mx-10'>
                    <label htmlFor="" className='font-semibold '>
                        Enter your email
                    </label><br/>
                    <input 
                    onChange={(e)=>setEmail(e.target.value)}
                    type="text" 
                    required='required'   
                    placeholder='you@example.com' 
                    className='h-12 lg:w-[28rem] border-2  border-black rounded-lg p-4 text-black'/><br/><br/>
                    <div className=''>
                        <label htmlFor="" className='font-semibold '>Enter your password</label>
                        <Link to='/signUp'className='text-orange-700 lg:ml-[11rem] ml-[2rem] underline '>
                        Forget Password
                        </Link>
                    </div>
                    <input 
                    onChange={(e)=>setPassword(e.target.value)}
                    type="password" 
                    required="required" 
                    placeholder='Enter Your Password' 
                    className='h-12 lg:w-[28rem] border-2  border-black rounded-lg p-4 text-black'/>
                </div>
                <div className='mx-10 my-5'>
                    <button 
                        onClick={handleLoginn}
                        style={{background: '#CB8342'}} 
                        className='text-white rounded-lg lg:h-14 lg:w-[28rem] w-[13.5rem] h-[3.5rem] text-2xl  font-semibold'>
                        {isLoading ? (
                                        <ThreeDots
                                        height="60"
                                        width="60"
                                        radius="9"
                                        color="white"
                                        ariaLabel="three-dots-loading"
                                        wrapperStyle
                                        wrapperClass="flex justify-center"
                                        />
                                        ) : (
                                            "Log in "
                                        )}
                    </button>
                </div>
                <div className='flex flex-row justify-center align-middle'>
                    <div className='h-[1px] w-[143px]  bg-[#e453a2] mt-3 mr-3'></div>
                    <p className=' '>You can login with: </p>
                    <div className='h-[1px] w-[143px] bg-[#e453a2] mt-3 ml-3'></div>
                </div>
                    
                <div className=' mx-10 my-7 lg:h-14 lg:w-[28rem] flex justify-evenly '>
                
                    <Link  
                    to='https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fdata&ec=GAlAFw&hl=en-GB&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S1141414705%3A1702391499968000&theme=glif'
                    className='bg-white text-red-600  rounded-md lg:border-2 border-white px-8 py-4 shadow-slate shadow-2xl ' >
                        <FaGoogle />
                    </Link >
                    <Link  
                    to='www.linkedin.com'
                    className='bg-white text-blue-700  rounded-md border-2 border-white px-8 py-4 shadow-slate shadow-2xl' >
                        <FaLinkedin />
                    </Link >
                    <Link  
                    to="www.facebook.com"
                    className='bg-white text-blue-700  rounded-md border-2 border-white px-8 py-4 shadow-slate shadow-2xl' >
                        <FaFacebookF />
                    </Link >
                </div>
            </div>
    </div>
    </>
  )
}

export default Login