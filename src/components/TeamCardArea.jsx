import React, { useEffect, useState } from "react";
import Card from "./TeamCard";
import "../assets/css/CardArea.css";
import LoadingSpinner from "./LoadingSpinner";


const CardArea = () => {
  const [formData, setformData] = useState([""]);
  // const r = Math.floor(Math.random()*4+1);
  // const arr = [tiger1, tiger2, tiger3];
  // useEffect(() => {

  // }, [third])
  const data = [
    {
      Name: "Karan Bagga",
      Linkedin: "djdkjd",
      Instagram: "djdjd",
      Twitter: "Djdjdd",
    },
    {
      Name: "Sahebjeet Singh",
      Linkedin: "djdkjd",
      Instagram: "djdjd",
      Twitter: "Djdjdd",
    },
    {
      Name: "Unnat Das",
      Linkedin: "djdkjd",
      Instagram: "djdjd",
      Twitter: "Djdjdd",
    }
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
    setformData(data);
  }, []);


  return (
    <>
        <div className="cardareaa">
          {formData.map((item, index) => {
            return (
              <Card
                key={index}
                formData={item}
                // img={arr[index]}
              />
            );
          })}
        </div>
    </>
  );
};

export default CardArea;
