import React, { useState } from 'react';
import './registration.css'
import {Link} from "react-router-dom"   
function Registration(props) {
    const[user,setuser]=useState('')
    const[password,setpssword]=useState('')
    const[userErr,setuserErr]=useState(false)
    const[passErr,setpassErr]=useState(false)
   function loginHandle(e){
    if(user.length<3 || password.length<3){
        alert("type correct values")
    }
    else{
        alert("all good values")
    }
        e.preventDefault()
    }
    function userHandler(e){
        let item=e.target.value;
        if(item.length<3){
            setuserErr(true)
        }
        else{
            setuserErr(false)
        }
        setuser(item)
        console.warn(e.target.value.length)
    }

    function passwordHandler(e){
        let item=e.target.value;
        if(item.length<3 ){
            setpassErr(true)
        }
        else{
            setpassErr(false)
        }
        setpssword(item)
        console.warn(e.target.value.length)
    }
    return (
        <>
        <div className="registration-detail">
            <div className="registration">
                <h3>. Registation Form .</h3>
                <div className="Rj-detail">
                    <form onSubmit={loginHandle}>
                    <input type="text"  id=""  placeholder='Name' onChange={userHandler} />{userErr?<span>not Valid</span>:''}
                
                    <input type="text" placeholder='Email address' />
                
                    <input type="text" placeholder='Country' />
                    
                    <input type="number" placeholder='Phone' />
                
                    <input type="password" placeholder='Password' onChange={passwordHandler} /><br />{passErr?<span>password not valid</span>:""}<br/>
                    <br />
                    <button type='submit'>Submit</button>
                    </form>
                </div>
                <p className='singin-account'>Already have an account? <Link to="/signin">Sign in</Link> </p>
            </div>
            </div>




        </>
    );
}

export default Registration;