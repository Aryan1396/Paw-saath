// eslint-disable-next-line no-unused-vars
import React from 'react'
import Login from "./companant/login_page/Login"
import Signin from "./companant/Register/Register"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Home from './companant/Home_page/Home';

function App() {
  return (
    <div>
     
    
      <BrowserRouter>
      <Routes>
        {/* for login page */}
     <Route path="/" element={<Login/>} />
        {/* for sing in page */}
     <Route path="/register" element={<Signin/>} />
        {/* for home page */}
     <Route path="/Home" element={<Home/>} />

      </Routes>
     
    </BrowserRouter>
    <ToastContainer />
    </div>
  )
}

export default App