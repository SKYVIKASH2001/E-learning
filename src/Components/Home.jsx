import React from 'react';
import './Home.css';
import Aboutus from './Aboutus';
import Course from './Course';
import Instructor from './Instructor'
import Contact from './Contact';

function Home(props) {
    return (
        <>
         <div className="contant">
            <h4>BEST ONLINE COURSES</h4>
            <h1>GET EDUCATED <span >ONLINE  <br></br>FROM YOUR HOME</span></h1>
            <p>The e-Learning Portal is a collaborative initiative of Prof. Gowramma I P, Dr Upasana Ray and Gautam Kumar to provide Blended Learning opportunities into a regular face to face classroom teaching-learning. The portal purports to prepare teacher <br />and teacher educator equipped with the necessary skills <br /> and competencies for the 21st century.</p>
            <button className='btn' >READ MORE</button>
             
         </div>
         <div className="second-container">
                <div className="second1">
                <i class="fa-solid fa-graduation-cap"></i>
                <h4>Skilled Instructors</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, aut.</p>
                </div>
                <div className="second1">
                <i class="fa-solid fa-globe"></i>
                <h4>Online Classes</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, aut.</p>
                </div>
                <div className="second1">
                <i class="fa-solid fa-house"></i>
                <h4>Home Project</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, aut.</p>
                </div>
                <div className="second1">
                <i class="fa-solid fa-book"></i>
                <h4>Book Library</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, aut.</p>
                </div>
            </div>
            <Aboutus/>
            <Course/>
            <Instructor/>
            <Contact/>
            
        </>
    );
}

export default Home;