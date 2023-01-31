import React from 'react'
import "../App.css"

function Login() {
  return (
   <>


<div className="row">
    <div className="col">
     <img src="https://source.unsplash.com/random/1920x1080/?money" width="100%" height="775vh" alt="Snow" />
    </div>
    <div className="col">
        <div className='singIn' >
        <p> have an acount <a href="/" ><b>SingIn</b></a></p>
        </div>
      <div className ="container">
         <h3>Register</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, saepe?</p>
        <div className='formbox'>
        <form style={{width:"360px"}}>
        <input className="form-control"  placeholder='Enter Phone Number'/><br/>
        <button className="form-control btn-warning" >Send OTP</button>
        </form>
        </div>
      </div>
    </div>
  </div>
   </>
  )
}
export default Login