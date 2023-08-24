import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NavBar from "./pages/NavBar";
import { useState } from "react";


function App() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    
    <div className="overflow-hidden w-screen h-screen bg-richblack-900 flex flex-col">
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></NavBar>
   
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}></Signup>}></Route>
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}></Login>}></Route>
      <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
    </Routes>
    </div>
    

  )
}

export default App;
