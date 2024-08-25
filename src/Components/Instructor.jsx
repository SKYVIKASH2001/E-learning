import React from "react";
import "./instructor.css";
import teacher1 from "../Components/Image/teacher1.jpg";
import iit from "../Components/Image/iit.jpg";
import teacher4 from "../Components/Image/teacher4.jpg";
import teacher3 from "../Components/Image/teacher3.jpg";
import google from "../Components/Image/google.webp";
import facebook from "../Components/Image/facebook.png";
import dell from "../Components/Image/dell.png";
import flipkart from "../Components/Image/flipkart.png";
import microsoft from "../Components/Image/microsoft.png";
import netflix from "../Components/Image/netflix.png";

function Instructor(props) {
  return (
    <>
      <div className="instructor">
        <h1> Expert Instructor</h1>
        <div className="instructor-name">
          <div className="instructor-id">
            <img src={teacher1} alt="" />
            <div className="media">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
            </div>
            <h4>Dr.Dwayne johnson</h4>
            <p>App Developer..</p>

            <div className="instructor-star-rating">
              4.7 <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
            </div>
          </div>

          <div className="instructor-id">
            <img src={iit} alt="" />
            <div className="media">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
            </div>
            <h4>Mr.Akash Singh IIT Bombay</h4>
            <p>DevOps Engineer..</p>

            <div className="instructor-star-rating">
              4.7 <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
            </div>
          </div>

          <div className="instructor-id">
            <img src={teacher4} alt="" />
            <div className="media">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
            </div>
            <h4>Dr. Lara Jones</h4>
            <p>Software Developer..</p>

            <div className="instructor-star-rating">
              4.7 <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
            </div>
          </div>
          <div className="instructor-id">
            <img src={teacher3} alt="" />
            <div className="media">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
            </div>
            <h4>Professor Arjun Kumar</h4>
            <p>Full Stack Developer</p>

            <div className="instructor-star-rating">
              4.7 <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
            </div>
          </div>
        </div>
        <div className="companies">
          <h1>Trusted by over 15,000 companies and millions of learners around the world</h1>
          <img src={netflix} alt="" />
          <img src={microsoft} alt="" />
          <img src={google} alt="" />
          <img src={flipkart} alt="" />
          <img src={facebook} alt="" />
          <img src={dell} alt="" />
        </div>
      </div>
    </>
  );
}

export default Instructor;
