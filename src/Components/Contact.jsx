import React from "react";
import "./contact.css";
import logo from '../Components/Image/logo.jpeg'

function Contact(props) {
  return (
    <>

      <div className="footer-contact">
        <div className="contact-list">
          <h3>Program</h3>
          <li>Android Development</li>
          <li>Full Stack Developer</li>
          <li>Software Developer</li>
          <li>Data Analyst</li>
          <li>Full Stack Developer</li>
          <li>Software Developer</li>
          <li>Data Analyst</li>
        </div>
        <div className="contact-list">
          <h3>Services</h3>
          <li>Traning</li>
          <li>Coaching</li>
          <li>Consulting</li>
          <li>Guidence</li>
        </div>
        <div className="contact-list">
          <h3>Contact</h3>
          <li>Home</li>
          <li>Join Now</li>
          <li>About</li>
          <li>course</li>
        </div>
        <div className="contact-list">
          <h3>News Lertters</h3>
          <input type="text" placeholder="Enter Your Mail Id" />
          <button>Subscribe</button>
          <br />
          <i class="fa-brands fa-whatsapp"></i>
          <i class="fa-brands fa-square-youtube"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-square-twitter"></i>
          <p>Mobile- +917582549637</p>
          <p>Email-Learning@700.Gmail.com</p>
        </div>
      </div>
      <div className="str-line"><hr/></div>
      <div className="last-logo">
        <div className="last-logoo">
          <img src={logo} alt="" />
        </div>
        <div className="location-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7008.002923238729!2d77.31755924133165!3d28.569718825276215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44f2ca1470f%3A0x8cff905b6cbfb433!2sSector%2018%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1724151036683!5m2!1sen!2sin" width="730" height="280" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          
        </div>
      </div>
     
    </>
  );
}

export default Contact;
