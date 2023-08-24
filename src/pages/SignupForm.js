import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
function SignupForm({setIsLoggedIn}) {
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
         email: "", password: "" ,firstName:"",lastName:"",mode:"",confirmPassword:""
    });

    function submitHandler(event) {
         event.preventDefault();
        
        if (formData.password === formData.confirmPassword)
        {
              setIsLoggedIn(true);
            toast.success("Account Created");
                    navigate("/dashboard");
              console.log(formData);
        }
        else {
            toast.error("Passwords dont match");
        }

    }

    return (
        <div>
              <div>
                <button>
                    Student
                </button>
                <button>Instructor</button>
            </div>
        
            <form onSubmit={submitHandler}>
                <div className="flex flex-col w-full gap-y-4 mt-6">
                    <div className="flex gap-5">
                        <label  htmlFor="firstName" className="w-full text-[0.875rem] font-semibold text-richblack-5 mb-1 leading-[1.375rem]">First Name<sup className="text-pink-200">*</sup>
                        <input className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px]" required type="text" id="firstName" name="firstName" placeholder="First Name" onChange={changeHandler} value={formData.firstName}></input>
                        </label>

                 <label htmlFor="lastName" className="w-full text-[0.875rem] font-semibold text-richblack-5 mb-1 leading-[1.375rem]">Last Name<sup className="text-pink-200">*</sup>
                        <input className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px]" required type="text" id="lastName" name="lastName" placeholder="Last Name" onChange={changeHandler} value={formData.lastName}></input>
                        </label>
                </div>
                    </div>
                
                
            
                <label htmlFor="email" className="w-full text-[0.875rem] font-semibold text-richblack-5 mb-1 leading-[1.375rem]">Email Address<sup className="text-pink-200">*</sup>
            <input className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px]" required type="email" id="email" placeholder="Enter Email Address" name="email" onChange={changeHandler} value={formData.email}></input>
             </label>
                    
                <div className="flex gap-5">
                <label htmlFor="create" className="w-full relative font-semibold text-[0.875rem] text-richblack-5  mt-3 mb-1 leading-[1.375rem]">Create Password<sup className="text-pink-200">*</sup>
            <input className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px]" required type={showPassword ? ("text"):("password")} id="create" placeholder="Enter Password" name="password" onChange={changeHandler} value={formData.password}></input>
                <span className="absolute right-3 top-[33px] cursor-pointer" onClick={() => setshowPassword(prev => !prev)}>{
               showPassword ?(<AiOutlineEye fontSize={24} fill="#AFB2BF"></AiOutlineEye>):(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"></AiOutlineEyeInvisible>)
                    
                }
                        </span>
                        </label>
                
                <label htmlFor="confirm" className="relative w-full text-[0.875rem] text-richblack-5 mt-3 mb-1 leading-[1.375rem] font-semibold">Confirm Password<sup className="text-pink-200">*</sup>
                        <input className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px]" required type={showPassword ? ("text"):("password")} id="confirm" placeholder="Confirm Password" name="confirmPassword" onChange={changeHandler} value={formData.confirmPassword}></input>
                        <span className="absolute right-3 top-[33px] cursor-pointer" onClick={() => setshowPassword(prev => !prev)}>{
               showPassword ?(<AiOutlineEye fontSize={24} fill="#AFB2BF"></AiOutlineEye>):(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"></AiOutlineEyeInvisible>)
                    
                }
                        </span>
                        </label>
                </div>
       
                
            

            <button className=" w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">Create Account</button>
        </form>
        </div>
      
    );
    
}

export default SignupForm;