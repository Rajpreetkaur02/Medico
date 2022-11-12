import React from "react";
import "../assets/css/carousel.css";
import carousel1 from "../assets/images/carousel1.png";
import carousel2 from "../assets/images/carousel2.png";
import carousel3 from "../assets/images/carousel3.png";

function Carousel() {
  const ImgData = [
    {
      src: `${carousel1}`,
      alt: "Carsouel1",
    },
    {
      src:`${carousel2}`,
      alt: "Carsouel2",
    },
    {
      src: `${carousel3}`,
      alt: "Carsouel3",
    },
  ];
  return (
    <div
      id="carouselExampleControls"
      className="carousel carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="imgCaroselContainer">
            <img src={`${carousel1}`} className="CaroselImg" alt={ImgData[0].alt} />
          </div>
        </div>
        {ImgData.map((value, idx) => (
          <div key={idx} className="carousel-item">
            <div className="imgCaroselContainer">
              <img src={value.src} className="CaroselImg" alt={value.alt} />
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;