import React from "react";
import "../assets/css/Whitepaper.css";
import doctor_img from "../assets/images/aboutDoctors.gif"

function Whitepaper() {
  return (
    <div className="WhitePaper">
      <div className="aboutContainer">
      <div className="headingText">
        <h1 className="text-center aboutContainerHeadtransparent ">ABOUT</h1>
         <h1 className="text-center aboutContainerHead ">ABOUT</h1> 
        </div>
        <div className="aboutDescContainer">
          <div className="aboutDescImgContainer">
            <img className="aboutDescImg" src={doctor_img} alt="tiger icon" />
          </div>
          <div className="aboutDescText">
            <h1 className="aboutContainerSubHead">We are developing a healthcare system around you</h1>
          We think that everyone should have easy access to excellent
          healthcare. Our aim is to make the procedure as simple as
          possible for our patients and to offer treatment no matter
          where they are — in person or at their convenience.
          
 </div>
 <button className = "aboutContainerButton" onClick={""}>Contact us</button>
        </div>
      </div>
    </div>
  );
}

export default Whitepaper;