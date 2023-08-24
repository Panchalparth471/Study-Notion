import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import React from "react";
import toast from "react-hot-toast";

function NavBar(props) {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    function loginHandler() {
        toast.success("Logged In Successfully");
    }

    function logoutHandler() {
        setIsLoggedIn(false);
        toast.success("Logged out Successfully");
    }
   
    return (
        <div className="flex justify-evenly text-white">
            <Link to="/"><img src={logo} width={160} height={32} loading="lazy"></img></Link>
   

            <nav>
                <ul className="flex gap-3">
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Contact
                        </Link>
                    </li>
                  

                </ul>
            </nav>
            <div className="flex ml-5 mr-3 gap-3">
                { !isLoggedIn &&
                    <Link to="/login"><button className="bg-richblack-800 py-[8px] text-richblack-100 px-[12px] rounded-[8px] border border-richblack-700">Login</button></Link>
                }
                {
                    !isLoggedIn &&
                    <Link to="/signup"><button className="bg-richblack-800 py-[8px]  text-richblack-100 px-[12px] rounded-[8px] border border-richblack-700">Signup</button></Link>
                }
                {   
                    isLoggedIn &&
                    <Link to="/"><button onClick={logoutHandler} className="bg-richblack-800  text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Log Out</button></Link>
                }
                {
                    isLoggedIn &&
                    <Link to="/dashboard"><button className="bg-richblack-800 py-[8px] px-[12px]  text-richblack-100 rounded-[8px] border border-richblack-700">Dashboard</button></Link>
                }

            </div>
            
                 </div>
    )
}

export default NavBar;