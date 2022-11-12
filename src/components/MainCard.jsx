import React, { useEffect, useState } from "react";
// import { Navbar } from "react-bootstrap";
import useMetaMask from "../hooks/useMetaMask";
import data from "../assets/data/data";
import "../assets/css/SearchCard.css";
import { useNavigate } from "react-router-dom";
import CheckingIPFS from "./IPFS/CheckingIPFS";
import nftdata from '../assets/data/NFTdata'; 
import Navbar from "../components/Navbar";
import Modal from "./Modals";
import general from "../assets/images/general.jpg";
import single from "../assets/images/single-classic.jpg";
import sharing from "../assets/images/sharing.jpg"
const MainCard = () => {
  const [Data, SetData] = useState([]);
  const navigate = useNavigate();
  const idx = localStorage.getItem("id");
  const [Show, SetShow] = useState(false);
  const [Index  , SetIndex] = useState(0);
  // console.log(idx);
  const { connect, disconnect, balance, isActive, account } = useMetaMask();
  if (window.ethereum) {
  } else {
    alert("install metamask extension!!");
  }
  const [NFT , SetNFT] = useState([]);
  const filterdata = (idx) => {
    const tempdata = data.filter((val) => val.id === idx);
    SetData(tempdata);
    const tempnft  = nftdata.filter((val) => val.type === tempdata[0].tag);
    SetNFT(tempnft);
    const index = Math.floor((Math.random() * (tempnft.length) + 1));
       SetIndex(nftdata[index].name);
  };
  useEffect(() => {
    filterdata(idx);
  }, []);
  return (
    <>
    <Navbar/>
      <div className="collections1">

      {Data.map((mp, idx) => (
          <div key={idx} className="CardDetail1">
            {/* <img src={mp.img} className="CardContImg2" alt="cricket" /> */}
            <div className="cardDesc1">
              <h1>{mp.name}</h1>
              <div>Location: {mp.location}</div>
            </div>
          </div>
        ))}
      </div>

        <div className="collections2">
        {Data.map((mp, idx) => (
          <div key={idx} className="CardDetail">
            <img src={general} className="CardContImg2" alt="cricket" />
            <div className="cardDesc">
              <div>Category: General</div>
              <div>Location: {mp.location}</div>
              <div>Beds Available: {mp.bedavail}</div>
              <div>Room Tarrif: {mp.price}</div>
            </div>
            <div className="btns">
              <button
                className="buyButton"
                onClick={() => {
                  SetShow(!Show);
                }}
              >
                Buy Now
              </button>
              <button
                className="backButton"
                onClick={() => {
                  navigate("/Collections");
                }}
              >
                Back
              </button>
              </div>
              {/* {Show && (
                <div className="connectionBtn">
                  <button className="connBtn" onClick={connect}>
                    {" "}
                    Connect Account
                  </button>
                  <button className="connBtn1" onClick={disconnect}>
                    {" "}
                    Disconnect Account
                  </button>
                </div>
              )} */}
            {/* </div> */}
          </div>
        ))}

{Data.map((mp, idx) => (
          <div key={idx} className="CardDetail">
            <img src={single} className="CardContImg2" alt="cricket" />
            <div className="cardDesc">
              <div>Category : Single Classic</div>
              <div>Location: {mp.location}</div>
              <div>Beds Available: {mp.bedavail}</div>
              <div>Room Tarrif: {mp.price}</div>
              </div>
              <div className="btns">
              <button
                className="buyButton"
                onClick={() => {
                  SetShow(!Show);
                }}
              >
                Buy Now
              </button>
              <button
                className="backButton"
                onClick={() => {
                  navigate("/Collections");
                }}
              >
                Back
              </button>
              </div>
              {Show && (
                <div className="connectionBtn">
                  <button className="connBtn" onClick={connect}>
                    {" "}
                    Connect Account
                  </button>
                  <button className="connBtn1" onClick={disconnect}>
                    {" "}
                    Disconnect Account
                  </button>
                </div>
              )}
            {/* </div> */}
          </div>
        ))}

{Data.map((mp, idx) => (
          <div key={idx} className="CardDetail">
            <img src={sharing} className="CardContImg2" alt="cricket" />
            <div className="cardDesc">
              <div>Category : Sharing</div>
              <div>Location: {mp.location}</div>
              <div>Beds Available: {mp.bedavail}</div>
              <div>Price: {mp.price}</div>
              </div>
              <div className="btns">
              <button
                className="buyButton"
                onClick={() => {
                  SetShow(!Show);
                }}
              >
                Buy Now
              </button>
              <button
                className="backButton"
                onClick={() => {
                  navigate("/Collections");
                }}
              >
                Back
              </button>
              </div>
              {/* {Show && (
                <div className="connectionBtn">
                  <button className="connBtn" onClick={connect}>
                    {" "}
                    Connect Account
                  </button>
                  <button className="connBtn1" onClick={disconnect}>
                    {" "}
                    Disconnect Account
                  </button>
                </div>
              )} */}
            {/* </div> */}
          </div>
        ))}
</div>
        <div className="Walletcontainer">Wallet : {account}</div>
        <CheckingIPFS/>
        <div>
          {
            account && <Modal imgs ={Index}/>
            // <img src={Index} alt="djjd"  />
          }
        </div>
      {/* </div> */}
    </>
  );
};

export default MainCard;
