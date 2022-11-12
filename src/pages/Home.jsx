import React from "react";
import Hero from "../components/Hero";
import Whitepaper from "../components/Whitepaper";
import FindABed from "../components/FindABed";
import "../assets/css/Home.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Counter from "../components/Counter";
import Testimonial from "../components/Testimonial";
function Home(props) {
  // console.log(props.formData);
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <Counter />
      <div>

        <div className="headingText">
        <h1 className="text-center aboutContainerHeadtransparent ">DEPARTMENTS</h1>
         <h1 className="text-center aboutContainerHead ">DEPARTMENTS</h1> 
        </div>
      
         {/* <h1 className="text-center aboutContainerHeadtransparent ">DEPARTMENTS</h1>
         <h1 className="text-center aboutContainerHead ">DEPARTMENTS</h1>   */}
        {/* <div className="search-filter-sort">
          <div className="navbarHomeSection2SearchContainer cardsearchoption">
            <i className="bi bi-search"></i>
            <input
              className="navbarHomeSection2SearchBar"
              type={"text"}
              placeholder="Search Collectibles"
            ></input>
          </div>
        </div> */}
      </div>
      <div className="SearchCardCont" style={{"justifyContent" : "center" , "gap" : "40px",}}>
        <div className="CardContSearchDepartment sp">
          <img src= "https://technext.github.io/live-doc/v1.0.0/assets/img/icons/neurology.svg" className="CardHomeImg" alt="cricket" />
          <div className="TicketBuySearch" >Neurology</div>
        </div>
        <div className="CardContSearchDepartment sp">
          <img src="https://technext.github.io/live-doc/v1.0.0/assets/img/icons/eye-care.svg" className="CardHomeImg" alt="cricket" />
          <div className="TicketBuySearch">Eye Care</div>
        </div>
        <div className="CardContSearchDepartment sp">
          <img src="https://technext.github.io/live-doc/v1.0.0/assets/img/icons/cardiac.svg" className="CardHomeImg" alt="cricket" />
          <div className="TicketBuySearch">Cardiac</div>
        </div>
        <div className="CardContSearchDepartment sp">
          <img src="	https://technext.github.io/live-doc/v1.0.0/assets/img/icons/heart.svg" className="CardHomeImg" alt="cricket" />
          <div className="TicketBuySearch">Heart Care</div>
        </div>
        <div className="CardContSearchDepartment sp">
          <img src="https://technext.github.io/live-doc/v1.0.0/assets/img/icons/osteoporosis.svg" className="CardHomeImg" alt="cricket" />
          <div className="TicketBuySearch">Osteoporosis</div>
        </div>
      </div>
      <FindABed />
      <Whitepaper />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
}

export default Home;
