import frame from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import {FcGoogle} from "react-icons/fc"
function Template({title,description1,description2,formType,image,setIsLoggedIn}) {
    return (
        <div className="flex text-white w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 justify-between">
            <div className="w-11/12 max-w-[450px]">
                <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>
                <p className="text-[1.125rem] leading-[1.625rem] mt-4 "> <span className="text-richblack-100">{description1}</span><br/>
                    <span className="text-blue-100 italic">{description2}</span>
                </p>
            
           {formType==="signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>):(<LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>) } 
              
                <div className="flex w-full items-center my-4 gap-mx-2">
                    <div className="h-[1px] w-full bg-richblack-700"></div>
                    <p className="text-richblack-700 font-medium leading-[1.375rem]">OR</p>
                    <div className="h-[1px] w-full bg-richblack-700"></div>
                </div>
                <button className="w-full flex justify-center items-center px-[12px] py-[8px]  rounded-[8px] font-medium text-richblack-100 border border-richblack-700 gap-x-2 mt-6"><FcGoogle></FcGoogle><p> Sign in with Google</p></button>
            </div>

            
            <div className="w-11/12 relative max-w-[450px] ">
                <img src={frame} width={558} height={504} loading="lazy" className="relative max-w-[450px] "></img>
                <img src={image} width={558} height={490} loading="lazy" className="absolute -top-4 right-4"></img>
            </div>

       </div> 
    );
}

export default Template;