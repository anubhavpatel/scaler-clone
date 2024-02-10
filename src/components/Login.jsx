import React, { useState } from 'react'
import "../style/Login.css"

import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai"
const Login = () => {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
});

const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
}; 
 const handleMouseDownPassword = (event) => {
  event.preventDefault();
};


const handlePasswordChange = (prop) => (event) => {
  setValues({ ...values, [prop]: event.target.value });
};

  const [isSignup, setIsSignup] = useState(false)
 
  const handleSwitch = () =>{
    setIsSignup(!isSignup) }
  return (
    <div className="login-main">
    
       <section className='auth-section'>

     { isSignup}
     <div className='auth-container-2'>
     
      <form>

        {
          isSignup && (
            <label htmlFor='name'>
              <h4>Display name</h4>
              <input type="text" id='name' name='name'  placeholder="Enter Display name" required/>
              
            </label>
          )
        }

        <label htmlFor="email">
          <h4>Login ID</h4>
          <input type="email" name='email' id='email' placeholder="Enter Login ID" required/>
        </label>
        <label htmlFor="password"> 
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <h4>Password</h4>
         
          </div>
          <div className='eye-icon'>
          <input    type={values.showPassword ? "text" : "password"}
                onChange={handlePasswordChange("password")}
                value={values.password} name='password' id='password'  placeholder="Enter Password" required/>
         <div style={{display:"flex", justifyContent:"flex-end",position:"relative" ,top:"-1.5rem",right:"1rem"}}> {values.showPassword ? <AiFillEye   onClick={handleClickShowPassword}  onMouseDown={handleMouseDownPassword}/> : <AiFillEyeInvisible   onClick={handleClickShowPassword}  onMouseDown={handleMouseDownPassword}/>}</div>
          </div>
        
          { isSignup && <p style={{color:"#666767", fontSize: "13px"}}>Passwords must contain at least eight characters,<br />including at least 1 letter and 1 number.</p>}
        </label>
<div  style={{display:"flex", justifyContent:"space-between", marginTop:"0.5rem"}}>
        <label htmlFor='check' style={{display: "flex",alignItems:"center" }}>
            <input type="checkbox" id='check' style={{ width: "15px" }}/>
            <p style={{fontSize: "13px"}}>Remember me</p>
          </label>
          { !isSignup && <p style={{color:"#007ac6",fontSize: "13px" ,cursor:"pointer"}}>Forget Password?</p> }</div>
          <label htmlFor='check' style={{display: "flex" ,alignItems:"center"}}>
            <input type="checkbox" id='check' style={{ width: "15px"}}/>
            <p style={{fontSize: "13px"}}>Agree to <span>terms & conditions</span></p>
          </label>
       <div style={{display:"flex", justifyContent:"center"}}>
        <button type='submit' className='auth-btn'>{ isSignup ? "Sign Up" : "Log in"}</button>
       
        </div>
        <div style={{display:"flex", justifyContent:"center",marginTop:"2rem"}}>
        <p>
        { isSignup ? "Already have an account?" : "Don't have an account? "}
        <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{ isSignup ? "Login" : "Register Here"}</button>
      </p></div>
      </form>
     
     </div>
   </section>
		</div>
  )
}

export default Login
