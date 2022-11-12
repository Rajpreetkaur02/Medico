import React, { useState, useEffect } from "react";
import data from "../assets/data/data";
import '../assets/css/SearchCard.css';
import { useNavigate } from "react-router-dom";
const CardDescriptionPage = ({ searchdata }) => {
  const [Data , SetData] = useState([]);
  const filterdata = (searchdata) => {
    const tempdata = data.filter((val) => val.tag === searchdata);
    SetData(tempdata);
  }
  useEffect(() => {
    filterdata(searchdata);
    console.log(Data);
  }, []);
  const navigate = useNavigate();
  const handleClick = (id)=>{
    window.localStorage.setItem('id' , id);
    navigate('/itemDetail');
  }
  return (
    <div className="SearchCardCont">
      {
        Data.map((mp , idx)=>(
          <div  className = "CardContSearch">
            <img src={mp.img} className="CardContImg" alt="cricket" />
            <div>{mp.name}</div>
            <div>{mp.location}</div>
            <button onClick={()=>handleClick(mp.id)} className="TicketBuySearch">Book Bed</button>
          </div>
        ))
      }
    </div>
  );
};

export default CardDescriptionPage;
