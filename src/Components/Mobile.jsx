import React from 'react';
import reactnative from "../Components/Image/reactnative.png";
import flutter from "../Components/Image/flutter.png";
import xcode from "../Components/Image/xcode.jpg";
import buildfire from "../Components/Image/buildfire.png";
import herogirl from "../Components/Image/herogirl.webp";

function Mobile(props) {
    return (
        <>
           <div className="androidd-course-container">
        <div className="androidd-courses">
          <h3>FOR BEGINNERS AND EXPERIENCED LEARNERS</h3>

          <h1>
            Mobile Application <br />
            Professional Certificate
          </h1>
          <p>
            Launch your career as an Mobile Application  developer. Build job-ready
            skills for an in-demand career and earn a credential from Meta. No
            degree or prior experience required to get started.
          </p>
          <div className="android-course-imagess">
          <img src={reactnative} alt="" />
            <img src={flutter} alt="" />
            <img src={xcode} alt="" />
            <img src={buildfire} alt="" />
          </div>
          <button>Enroll now</button>

          <div className="hour-project">
            <div className="enroll">
              <div className="star">
                <p>4.8k</p>
              
              </div>
              <p>13K+ Learning enrolled</p>
            </div>
            <div className="enroll">
              <p>140+</p>
              <p>Hour of lectures</p>
            </div>
            <div className="enroll">
              <p>6+</p>
              <p>guided project</p>
            </div>
          </div>
        </div>

        <div className="imagesss">
          <img src={herogirl} alt="" />
        </div>
      </div>
      <div className="planes">
        <h1>Choose the plan that works for you</h1>
      </div>

      {/* .////////////........ */}

      <div className="planess">
        <div className="basic-plane">
          <p className="basic-app-development">Basic</p>
          <p className="basic-app-development">
            Mobile Application Development - Complete Course
          </p>
          <p>
            Ideal if you want to learn Mobile Application Development with Career Climber
            Combo (Duration - 6 months)
          </p>
          <h1 className="placement">This course includes:</h1>

          <li>31.5 hours on-demand video</li>
          <li>2 articles</li>
          <li>7 downloadable resources</li>
          <li>Access on mobile and TV</li>
          <li>Full lifetime access</li>

          <h4>Certificate of completion</h4>
          <h4>Curriculum</h4>
          <li>Introduction to Mobile Application Development</li>
          <li>Programming Fundamentals for Mobile Development (Java/Kotlin )</li>
          <li>Native Android Development</li>
          <li> Cross-Platform Development</li>
          <p>job Bootcamp for Professionals</p>
          <button>₹3999</button>
          <h1 className="placement">Placement Assistance Program</h1>
          <h4>Everything included in Standard plan</h4>
          <li>Operating systems</li>
          <li>System design</li>
          <li>Aptitude building</li>
          <p>Placement</p>
          <h4>Dedicated placement coordinator</h4>
          <li>1-1 Resume review & profile building</li>
          <li>10 Mock interviews</li>
          <li>10 Mentorship sessions</li>
          <button>Book free webinar</button>
        </div>

        <div className="basic-plane">
          <p className="basic-app-development">Advance Plane</p>
          <p className="basic-app-development">
            Mobile Application Development - Complete Course
          </p>
          <p>
            Ideal if you want to learn android Development with Career Climber
            Combo (Duration - 10 months)
          </p>
          <h1 className="placement">This course includes:</h1>

          <li>51.5 hours on-demand video</li>
          <li>5 articles</li>
          <li>12 downloadable resources</li>
          <li>Access on mobile and TV</li>
          <li>Full lifetime access</li>

          <h4>Certificate of completion</h4>
          <h4>Curriculum</h4>
          <li>Introduction to Mobile Application Development</li>
          <li>Programming Fundamentals for Mobile Development (Java/Kotlin )</li>
          <li>Native Android Development</li>
          <li> Cross-Platform Development</li>
          <li>Mobile App Design and User Experience (UX)</li>
          <li>Testing and Debugging Mobile Applications</li>
          <li>Mobile App Security</li>
          <li>Advanced Topics in Mobile Development</li>

          <p>job Bootcamp for Professionals</p>
          <button>₹7999</button>
          <h1 className="placement">Placement Assistance Program</h1>
          <h4>Everything included in Advance Standard plan</h4>
          <li>Operating systems</li>
          <li>System design</li>
          <li>Aptitude building</li>
          <li>DBMS/SQL</li>
          <p>Placement</p>
          <h4>Dedicated placement coordinator</h4>
          <li>1-1 Resume review & profile building</li>
          <li>20 Mock interviews</li>
          <li>20 Mentorship sessions</li>
          <li>20 Guardian Angel Sessions</li>
          <button>Book free webinar</button>
        </div>
      </div> 
        </>
    );
}

export default Mobile;