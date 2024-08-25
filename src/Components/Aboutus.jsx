import React from "react";
import about_img from "../Components/Image/secondimg.jpg";
import './Aboutus.css'
function Aboutus(props) {
  return (
    <>
      <div className="about">
        <div className="about-img">
          <img src={about_img} alt="" />
        </div>
        <div className="about-container">
          <div className="about-text">
            <h2>About US</h2>
            <h1>Welcome to eLEARNING</h1><br />
            <p>
            An eLearning platform is a digital environment that facilitates online education and training. It allows learners to access courses, instructional materials, and assessments through the internet. These platforms often feature interactive tools like video lectures, quizzes, discussion forums, and real-time chats to enhance learning.<br/>  They can be tailored for various educational purposes, from K-12 and higher education to corporate training and professional development. eLearning platforms offer flexibility, enabling learners to study at their own pace and access content anytime, anywhere.
            </p>
          </div>
          <div className="about-skill">
            <div className="first-skill">
              <div className="skill-set">
                <i class="fa-solid fa-arrow-right"></i>
                <p>Skill Instructors</p>
              </div>
              <div className="skill-set">
                <i class="fa-solid fa-arrow-right"></i>
                <p>International Certificate</p>
              </div>
              <div className="skill-set">
                <i class="fa-solid fa-arrow-right"></i>
                <p>Online classes</p>
              </div>
            </div>
            <div className="second-skill">
              <div className="skill-set">
                <i class="fa-solid fa-arrow-right"></i>
                <p>Personality Development</p>
              </div>
              <div className="skill-set">
                <i class="fa-solid fa-arrow-right"></i>
                <p>Communication Skill</p>
              </div>
              <div className="skill-set">
                <i class="fa-solid fa-arrow-right"></i>
                <p>Leadership Quality</p>
              </div>
            </div>
            
          </div>
          <button className="btnblue">  READ MORE  </button>
        </div>
      </div>
      
    </>
  );
}

export default Aboutus;
