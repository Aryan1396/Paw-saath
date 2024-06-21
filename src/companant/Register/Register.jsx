import { auth, db } from "../firebase";
import { useState } from 'react';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import "../Register/Register.css";

function Register() {
  
  const [selectedElements, setSelectedElements] = useState([]);
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [choice, setChoice] = useState("");
  
  //background color change if we select the option
  const handleClick = (id) => {
    if (selectedElements.includes(id)) {
      setSelectedElements(selectedElements.filter(item => item !== id)); // Deselect if already selected
    } else {
      setSelectedElements([...selectedElements, id]); // Select the element by adding its id to the array
    }
  };

    
  //crete the new account with email and password
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User Registered Successfully:", user);
      
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: FirstName,
          lastName: LastName,
          choice: choice
        });
      }
      toast.success("Successfully Register! redirecting to the login page ", {
        position: "top-center"
      });
      setTimeout(() => {
           window.location.href = "/";
      }, 3000);
   
    } catch (error) {
      console.error("Error registering user:", error.message);
      toast.error(error.message, {
        position: "top-left"
      });
    }
  };

  return (
    <div className='main_div'>

      {/* cover div contain all the element */}
      <div className='cover_div-register'>

        {/* logo div */}
        <div className='logo'>
          <img src="https://pawsaathi.com/wp-content/uploads/2024/01/Pawsaathi-Pet-Network-Logo.png" alt="" />
        </div>  

        {/* input div for create the new account */}
        <div className="input-form-cover-div">
          <form className="main-input-filed-from" onSubmit={handleRegister}>
            <input className="input-flied-for-all-input" required type="text" value={FirstName} placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
            <input className="input-flied-for-all-input" type="text" required value={LastName} placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
            <input className="input-flied-for-all-input" required type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input className="input-flied-for-all-input" type="password" required value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" className="register-button">Register</button>
          </form>
        </div>

          {/* the select options */}
        <div className="container">
          <div className="content">
            {["Pet Parent", "Pet Boarder", "Pet Sitter", "Groomer", "Pet Lover", "Pet Walker", "Pet Doctor", "Trainer"].map((num) => (
              <h1 id="choice-for-register" value={choice}
                key={num}
                className={selectedElements.includes(`h1-${num}`) ? 'selected' : ''}
                onClick={() => handleClick(`h1-${num}`)}
                onChange={(e) => setChoice(e.target.value)}
              >
                {num}
              </h1>
            ))}
          </div>
        </div>

            {/* already have an account and go to the login page div */}
        <div className="already-account">
          <p>Already have an account? <a className="login-page" href="/">Login</a></p>
        </div>
      </div>
    </div>
  );
}

export default Register;
