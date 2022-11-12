import React from 'react'
import Carousel from './Carousel';
import "../assets/css/FindABed.css";
import { Link } from "react-router-dom";

const FindABed = () => {
  return (
    <div>
        <div className="FindHeroContainer">
          <div className="findabedleft">
              <h2>FIND A BED</h2>
          </div>
          <div className='findabedmain'>
            <div className='carousel_2'>
              <Carousel />
            </div>
            <div className='findbedpt2'>
              <div className='findbedtext'>Medico helps you to check availability and book a bed at the top hospitals. Search for the specific department and get more specific search results to save you time.</div>
              <div><Link to={"/Collections"}><button className = "bookButton" onClick={""}>BOOK APPOINTMENT</button></Link></div>
            </div>
          </div>
      
            
      
      
      </div>
    </div>
  )
}

export default FindABed