import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { stringify } from 'postcss';
import { Audio, ThreeDots } from 'react-loader-spinner';



const SinUp = () => {
const [name, setName] = useState('');
const [password, setPassword] = useState('');
const [phone,setPhone] = useState()
const [email,setEmail] = useState('');
const [isLoading, setIsLoading] = useState(false)
const navigate = useNavigate();


const handleSignUp = (e)=>{
    e.preventDefault();
    setIsLoading(true);
    axios({
      method: "POST",
      url: "https://afriroot.onrender.com/auth/register/",
      data: {
        name: name,
        password: password,
        phone: phone,
        email: email,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch((error) => {
        console.log("error", error);
        toast.error(error.message);
        setIsLoading(false);
      });
}
  return (
    <>
    <ToastContainer/>
    <div style={{background: '#FFFAF5'}} className=' w-full h-[60rem] py-[4rem]'>
        {/* <div  className=' bg-green-800 lg:w-[35rem]  h-[39rem] shadow-slate shadow-2xl mx-auto my-auto rounded-3xl'> */}
            <div className='h-[39rem] lg:w-[35rem] w-[20rem] py-1  shadow-slate shadow-2xl mx-auto my-auto rounded-3xl'>
                <h1 className='font-semibold text-3xl mx-10 mt-9 lg:flex justify-center'>Sign Up</h1>
                <div className='mx-10 my-6'>
                    <label htmlFor="" className='font-semibold '>
                        First name
                    </label><br/>
                    <input 
                    onChange={(e)=>{setName(e.target.value)}}
                    type="text" 
                    required='required'   
                    placeholder='Enter your first Name' 
                    className='lg:w-[28rem] h-12 border-2  border-black rounded-lg p-4 text-black '/><br/><br/>
                    <label htmlFor="" className='font-semibold '>
                        Phone
                    </label><br/>
                    <input 
                    onChange={(e)=>{setPhone(e.target.value)}}
                    type="text" 
                    required='required'   
                    placeholder='Phone Number' 
                    className='h-12 lg:w-[28rem] border-2  border-black rounded-lg p-4 text-black'/><br/><br/>
                    <label htmlFor="" className='font-semibold '>
                    Enter your email
                    </label><br/>
                    <input 
                    onChange={(e)=>setEmail(e.target.value)}
                    type="email" 
                    required='required'   
                    placeholder='you@example.com' 
                    className='h-12 lg:w-[28rem] border-2  border-black rounded-lg p-4 text-black'/><br/><br/>
                    <div className='flex'>
                    <label htmlFor="" className='font-semibold '>Enter password</label>
                    
                    </div>
                    <input 
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" 
                    required="required" 
                    placeholder='Enter Password'        
                    className='h-12 lg:w-[28rem] border-2  border-black rounded-lg p-4 text-black'/>
                </div>
                <div className='mx-10 my-5'>
                    <button 
                    onClick={handleSignUp}
                    style={{background: '#CB8342'}} 
                    className='  text-white rounded-xl lg:h-14 lg:w-[28rem] w-[13.5rem] h-[3rem] text-2xl  font-semibold'>
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
                                            "Sign Up "
                                        )}
                    </button>
                </div>
                <div className=' mt-9'>
                <p className='lg:flex justify-center ml-[3rem] font-semibold'>Already have an account yet?  
                    <Link to="/login" className='text-orange-700 ml-[1rem] underline '>
                       Login
                    </Link>
                </p>
                </div>
            </div>
    </div>
    </>
  )
}

export default SinUp