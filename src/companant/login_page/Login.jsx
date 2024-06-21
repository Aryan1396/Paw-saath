import { useState } from "react";
import { GoogleAuthProvider,FacebookAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../firebase";
import "../login_page/login.css"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //email authentication
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/Home";
      toast.success("Success Notification !", {
        position: "top-center"
      });
    } catch (error) {
      console.error("Error registering user:", error.message);
      toast.error(error.message, {
        position: "top-left"
      });
    }
  }

  //google authentication
  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result)
      if(result.user){
        window.location.href = "/Home"
        toast.error("login Successfully", {
          position: "top-center"
        });
      }
    })
  }

  //facebook authentication
  function facebookLogin() {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result)
      if(result.user){
        window.location.href = "/Home"
        toast.error("login Successfully", {
          position: "top-center"
        });
      }
    })
  }

  return (

    <div className='main_div'>
      {/* main-cover-div-contain-all-the-thing */}
      <div className='cover_div'>
        {/* logo-div-contain-the-logo */}
        <div className='logo'>
          <img src="https://pawsaathi.com/wp-content/uploads/2024/01/Pawsaathi-Pet-Network-Logo.png" alt="" />
        </div>

        {/* form-div-contain-the-form */}
        <div className='input_filed'>
          <form className='input_class_div' id="form-input-for-login" onSubmit={handleSubmit}>
            <input className='input_class_div' type='email' required value={email} placeholder='EMAIL' onChange={(e) => setEmail(e.target.value)} />
            <input className='input_class_div' type='password' value={password} required placeholder='PASSWORD' onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" id='third_input-filed'>Submit</button>
          </form>

        </div>

        {/*continue-with-text-div */}
        <div className='continue-with'>
          <h3 id='continue_with_text'>or continue with</h3>
        </div>

        {/*continue-with-option-div */}
        <div className='continue-with-options'>
          <img onClick={googleLogin} className='continue-with-options-icons' src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="" />
          <img onClick={facebookLogin} className='continue-with-options-icons' src="https://static-00.iconduck.com/assets.00/facebook-color-icon-2048x2048-bfly1vxr.png" alt="" />
          <img className='continue-with-options-icons' src="https://cdn.freebiesupply.com/images/large/2x/apple-logo-transparent.png" alt="" />
        </div>

        {/*do_it_later & sign in option */}
        <div className='do_it_later'>
          <h3 id='first-element-do_it_later'>i`ll do it later</h3>
          <p id="second-element-do_it_later">Don`t have an account? <a className="login-page" href="/register">Register</a></p>
        </div>
      </div>
    </div>
  )
}


export default Login