import React from "react";
import Carousel from "../components/Carousel";
import "../assets/css/heroHome.css";
import {useNavigate} from "react-router-dom"
function Hero() {
  const navigate = useNavigate();
  return (
    <div>
      <div className = "heroContainer" >
      
        <div className = "heroContainerPart1">
          <div className= "heroContainerText"> Now finding a hospital bed in top healthcare facilities is just one click away! <span style ={{"color"  : "#000" , "Border" : "solid 1px #fff"}}></span> </div>
          <div className = "heroContainerText2">Book a bed right from your home and get the best healthcare!</div> 
          {/* <div className = "heroContainerText3">The price of NFT : <span className="heroContainerTextspan"> Yet To be decided</span> </div> */}
          <button className = "heroContainerButton" id="findbutton" onClick={()=>{navigate('/Collections')}}>Find a bed</button>
        </div>
        <div className = "heroContainerPart2">
          <Carousel/>
        </div>
        
      </div>
    </div>
  );
}

export default Hero;
