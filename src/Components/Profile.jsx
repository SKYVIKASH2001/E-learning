import React, { useState } from "react";
import "./profile.css";

function Profile(props) {
  const [selectedImage, setSelectedImage]=useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <>
      <div className="personal-profile-details">
      <div style={{ textAlign: 'center' }}>
      <h2>Upload Profile Logo</h2>
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleImageChange} 
        style={{ marginBottom: '20px' }}
      />
      {selectedImage && (
        <div>
          <img 
            src={selectedImage} 
            alt="Profile Logo" 
            style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover' }} 
          />
        </div>
      )}
    </div>
  



        <div className="name-detail">
         <div>
         <span>First Name:</span>
         <input type="text" />
         </div>
          <div>
          <span>Middle Name:</span>
          <input type="text" />
          </div>
          <div>
          <span>Last Name:</span>
          <input type="text" />
          </div>
        </div>

        <div className="date-gender">
          <div>
          <span>Date of Birth:</span>
          <input type="date" />
          </div>
         <div>
         <span>Gender:</span>
         <input type="text" />
         </div>
          <div>
          <span>Status:</span>
          <input type="text" />
          </div>
        </div>

        <div className="all-number">
            <div>
            <span>Mobile Number:</span>
            <input type="number" />
            </div>
            <div>  <span> Ulternate Number:</span>
            <input type="number" /></div>
            <div>  <span>Email Id:</span>
            <input type="text" /></div>
         
        
        
         
        </div>
        <div className="name-details">
            <div><span>GitHub Link:</span>
            <input type="text" /></div>
            <div><span>Course Name:</span>
            <input type="text" /></div>
            <div> <span>Education:</span>
            <input type="text" /></div>
    

        </div>
        
        <button className="personal-detail-submit-button
        ">Submit</button>

      </div>
    </>
  );
}

export default Profile;
