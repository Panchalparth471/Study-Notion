import { useState } from "react";
import React from "react";
import toast from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
function LoginForm({setIsLoggedIn}) {
    const [showPassword, setshowPassword] = useState(false);
    const navigate = useNavigate();

   function changeHandler(event) {
      setformData ((prevData) => (
          {
              ...prevData,
              [event.target.name]: event.target.value
          }
      )
      )
          
      
    }

    const [formData, setformData] = useState({
         email: "", password: "" 
    });

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
        console.log(formData);
    }

    return (
        <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
            <label htmlFor="email" className="w-full text-[0.875rem] font-semibold text-richblack-5 mb-1 leading-[1.375rem]">Email Address<sup className="text-pink-200">*</sup><br/>
                <input className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px]" required type="email" id="email" placeholder="Enter Email Address" name="email" onChange={changeHandler} value={formData.email}></input>
            </label>
            
            <label htmlFor={showPassword ? ("text"):("password")} font-semibold className=" relative w-full text-[0.875rem]">Password<sup>*</sup> <br/>
            <input className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px]" required type="password" id="password" placeholder="Enter Password" name="password" onChange={changeHandler} value={formData.password}></input>
                <span className="absolute right-3 top-[33px] cursor-pointer" onClick={() => setshowPassword(prev => !prev)}>{
               showPassword ?(<AiOutlineEye fontSize={24} fill="#AFB2BF"></AiOutlineEye>):(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"></AiOutlineEyeInvisible>)
                    
                }
               </span>
                <p className="text-blue-100 mt-1 text-xs cursor-pointer max-w-max ml-auto">Forget Password</p>
                </label>


            <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">Sign Up</button>
        </form>
    );
}

export default LoginForm;