import React, { useState } from "react";
import "./Signin.css";

function Signin(props) {
  const [user, setuser] = useState("");
  const [password, setpssword] = useState("");
  const [userErr, setuserErr] = useState(false);
  const [passErr, setpassErr] = useState(false);
  function loginHandle(e) {
    if (user.length < 3 || password.length < 3) {
      alert("type correct values");
    } else {
      alert("all good values");
    }
    e.preventDefault();
  }
  function userHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setuserErr(true);
    } else {
      setuserErr(false);
    }
    setuser(item);
    console.warn(e.target.value.length);
  }

  function passwordHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setpassErr(true);
    } else {
      setpassErr(false);
    }
    setpssword(item);
    console.warn(e.target.value.length);
  }
  return (
    <>
      <div className="signin-container">
        <div className="sign-contrainer">
          <h1>Sign In</h1>
          <div className="idpassword">
            <form onSubmit={loginHandle}>
              <input type="text" placeholder="Enter Your User Name"onChange={userHandler} /><br />{userErr?<span>not Valid</span>:''}
              <br />
              <br />
              <input type="password" placeholder="Enter Your Password" onChange={passwordHandler}/><br/>{passErr?<span>password not valid</span>:""}<br/>
              
              <button className="continuee" type='submit'>Continuee</button>
              <br />
            </form>
            <p className="media">Or Continue With Social Media</p>
            <i class="fa-brands fa-google"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-square-twitter"></i>
            <i class="fa-brands fa-github"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
