import React, { useState } from "react";
import data from "../assets/data/data";
import "../assets/css/Collections.css";
import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
// import Button from "react-bootstrap/Button";

// import Offcanvas from "react-bootstrap/Offcanvas";
import CardDescriptionPage from "./CardDescriptionPage";
const SearchBar = () => {
  // const [show, setShow] = useState(false);
  const [SearchData, SetSearchData] = useState("");
  const [InputData , SetInputData] = useState("");
  const [Clicked , SetClicked] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const Change = (e)=>{
    SetInputData(e.target.value);
    // console.log(e.target.value);
  }
  const handle_submit = (input)=>{
    SetSearchData(input);
    SetClicked(!Clicked);
    // console.log(input);
  }
  const navigate = useNavigate();
  const handleClick = (id)=>{
    window.localStorage.setItem('id' , id);
    navigate('/itemDetail');
  }
  return (
    <>
      {/* <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <div className="SearchBarLeft">
          <div className="SearchBarOption">Sports</div>
          <div className="SearchBarOption">Movies</div>
          <div className="SearchBarOption">Concert</div>
          <div className="SearchBarOption">Event</div>
        </div>
      </Offcanvas> */}
      {/* <div className="SearchBarTicket">
        <Button variant="primary" onClick={handleShow}>
          <i class="bi bi-menu-button-wide"></i>
        </Button> */}
        
      {/* </div> */}
      <div className="SpText glow">
              FIND A BED
            </div>
      <div className="SearchBarCont2">
          <input required className="SearchBarSearchTicket" onChange={Change} type="text" placeholder="Search items"></input>
          <button className="SearchBarSubmit" onClick={()=>{handle_submit(InputData)}}>Search</button>
          {/* <Dropdown/> */}
          </div>
      {
        Clicked && <CardDescriptionPage searchdata={SearchData} />
      }
      <div>
        {
          Clicked === false ? (
            <>
            
            
            <div className="SearchCardCont">
      {
        data.map((mp , idx)=>(
          <div  className = "CardContSearch">
            <img src={mp.img} className="CardContImg" alt="cricket" />
            <div>{mp.name}</div>
            <div>{mp.location}</div>
            <button onClick={()=>handleClick(mp.id)} className="TicketBuySearch">Search Bed</button>
          </div>
        ))
      }
    </div>
            </>
          ):
          (null)
        }
      </div>
    </>
  );
};

export default SearchBar;
