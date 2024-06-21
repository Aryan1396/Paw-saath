// eslint-disable-next-line no-unused-vars
import React from 'react'
import "../Home_page/Home.css"
import { auth } from '../firebase';


function Home() {

  // funcation for log out
  async  function handleLogout() {
        try {
            await auth.signOut();
            window.location.href = "/";
            console.log("User /logged out")
        } catch (error) {
            console.log("Error logout error", error.message) 
        }
    }

  return (
    <div className='main_div'>

      {/* cover div contain all element */}
    <div className='cover_div'>

      {/* logo div */}
      <div className='logo'>
        <img src="https://pawsaathi.com/wp-content/uploads/2024/01/Pawsaathi-Pet-Network-Logo.png" alt="" />
      </div>  

      {/* basic welcome page for testing */}
      <div>
        <h1 className='home-text'>Welcome to Paw saath</h1>
        <button className='home-button' onClick={handleLogout}>LogOut</button>
    </div>
    </div>
  </div>
  )
}

export default Home