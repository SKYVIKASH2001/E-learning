import React from "react";
import "./course.css";
import andriod from "../Components/Image/andriod.jpg";
import business from "../Components/Image/business.png";
import data from "../Components/Image/data.jpg";
import graphic from "../Components/Image/graphic.jpg";
import webdevelopment from "../Components/Image/webdevelopment.jpg";
import software from "../Components/Image/software.png";
import ios from "../Components/Image/ios.jpg";
import animation from "../Components/Image/animation.png";
import cad from "../Components/Image/cad.png";
import devops from "../Components/Image/devops.jpg"
import { useNavigate } from "react-router-dom";


function Course(props) {
  const redirect=useNavigate()
  return (
    <>
      <div className="types-ofcourses">
        <h1>Courses</h1>
        <div className="coursess">
          <div className="courses" onClick={()=>{redirect('/android')}}>
            <img src={andriod} alt="" />
            <h3>
              The Complete 2024 <br />
              Andriod Development
            </h3>
            <p>Dr.Angela Yu,Developer..</p>
            <div className="star">
              4.7 <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>(391,486)
            </div>
            <div className="rupee">₹3,999</div>
          </div>

          <div className="courses" onClick={()=>{redirect('./business')}}>
            <img src={business} alt="" />
            <h3>
              The Business analyst <br /> Master Bootcamp
            </h3>
            <p>Dr.Colt Steele </p>
            <div className="star">
              4.7 <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>(386,186)
            </div>
            <div className="rupee">₹4,999</div>
          </div>
          <div className="courses" onClick={()=>{redirect('./data')}}>
            <img src={data} alt="" />
            <h3> The Complete 2024 Full Data Analyst Course</h3>
            <p>Dr.Kalob Taulien..</p>
            <div className="star">
              4.7 <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>(186,186)
            </div>
            <div className="rupee">₹5,999</div>
          </div>
          <div className="courses" onClick={()=>{redirect('/graphic')}}>
            <img src={graphic} alt="" />
            <h3>The Master Classes of Graphic Designing</h3>
            <p>Dr.Vikash Singh Rana..</p>
            <div className="star">
              4.7 <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>(386,186)
            </div>
            <div className="rupee">₹4,999</div>
          </div>
          <div className="courses" onClick={()=>{redirect('/fullstack')}}>
            <img src={webdevelopment} alt="" />
            <h3>The Complete Full Stack Course</h3>
            <p>Professor Arjun Kumar...</p>
            <div className="star">
              4.7 <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>(386,186)
            </div>
            <div className="rupee">₹4,999</div>
          </div>
          <div className="courses" onClick={()=>{redirect('/software')}}>
            <img src={software} alt="" />
            <h3>The full Software Development Course</h3>
            <p>Dr.Lara jons </p>
            <div className="star">
              4.7 <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>(386,186)
            </div>
            <div className="rupee">₹4,999</div>
          </div>
          <div className="courses"onClick={()=>{redirect('/mobile')}}>
            <img src={ios} alt="" />
            <h3>The Mobile Application Development</h3>
            <p>
             Dr.Karan Kumar..
            </p>
            <div className="star">
              4.7 <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>(356,186)
            </div>
            <div className="rupee">₹6,999</div>
          </div>
          <div className="courses" onClick={()=>{redirect('/animation')}}>
            <img src={animation} alt="" />
            <h3>The 2D 3D Animation & VFX Course</h3>
            <p>
             Mr Gaurav Nath
            </p>
            <div className="star">
              4.7 <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>(356,186)
            </div>
            <div className="rupee">₹6,999</div>
            
          </div>
          <div className="courses" onClick={()=>{redirect('/cad')}}>
            <img src={cad} alt="" />
            <h3>The Fully Complete CAD Course</h3>
            <p>
             Mr.Arun Sharma IIT BHU
            </p>
            <div className="star">
              4.7 <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>(456,186)
            </div>
            <div className="rupee">₹6,999</div>
          </div>
          <div className="courses" onClick={()=>{redirect('/deops')}}>
            <img src={devops} alt="" />
            <h3>Become A DevOps Engineer</h3>
            <p>
              Mr.Akash Singh IIT Bombay
              Professor Kiran Negi IIT Delhi
            </p>
            <div className="star">
              4.7 <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>(100,186)
            </div>
            <div className="rupee">₹10,999</div>
          </div>
        </div>
      </div>

      {/* .///////////// */}

      <div className="popular">
        <h1>Popular Courses..</h1>
        <div className="popular-course">
          <div className="popular-courses" onClick={()=>{redirect('/graphic')}}>
            <img src={graphic} alt="" />
            <h3>The Master Classes Of Graphic Designing</h3>
            <p>Dr.Vikash Singh Rana</p>
            <div className="star">
              4.7 <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>(100,186)
            </div>
            <div className="rupee">₹4,999</div>
          </div>
          <div className="popular-courses"  onClick={()=>{redirect('/animation')}}>
            <img src={animation} alt="" />
            <h3>The 2D 3d Animation & VFX Course</h3>
            <p>Mr.Gaurav Nath</p>
            <div className="star">
              4.7 <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>(100,186)
            </div>
            <div className="rupee">₹6,999</div>
          </div>
          <div className="popular-courses"  onClick={()=>{redirect('/fullstack')}}>
            <img src={webdevelopment} alt="" />
            <h3>The Complete Full Stack Course</h3>
            <p>
              Professor Arjun Kumar..
            </p>
            <div className="star">
              4.7 <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>(100,186)
            </div>
            <div className="rupee">₹4,999</div>
          </div>
          <div className="popular-courses"  onClick={()=>{redirect('/software')}}>
            <img src={software} alt="" />
            <h3>The Full Software Development Course</h3>
            <p>
             Dr. Lara jons
            </p>
             <div className="star">
              4.7 <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>(100,186)
            </div>
            <div className="rupee">₹4,999</div>
          </div>
          <div className="popular-courses"  onClick={()=>{redirect('/andr')}}>
            <img src={andriod} alt="" />
            <h3>The Complete 2024 Andriod Development</h3>
            <p>
             Dr.Angela Yu,Developer..
            </p>
            <div className="star">
              4.7 <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>(100,186)
            </div>
            <div className="rupee">₹3,999</div>
          </div>
        </div>
      </div>
    
    </>
  );
}

export default Course;
