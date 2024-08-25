import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom" 
import logo from '../Components/Image/logo.jpeg'

function Navbar(props) {
    return (
        <>
            <div className="First-container">
                <div className="navbar">
                    <img src={logo} alt="" className='img1' />
                    <div className="iteams">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/course">Course</Link>
                    <Link to="/contact">Conatct</Link>
                    <Link to="/join">JoinNow</Link>
                    <Link to='/profile'><i class="fa-solid fa-user"></i></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;