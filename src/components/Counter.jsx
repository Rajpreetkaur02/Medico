import CountUp from "react-countup";
import "../assets/css/Counter.css";
import React from "react";
import MasksIcon from '@mui/icons-material/Masks';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import PeopleIcon from '@mui/icons-material/People';

export default function Counter() {
  return (
    <div>
      
      <div className="CounterHeroContainer">
      <h2>Our Unmatched Achievements</h2>
      <div className="CounterHeroInnerContainer">
        <div className="CounterHeroTextContainer">
          <MasksIcon fontSize="large"/>
          <div className = "CounterHeroText1">Beds provided during covid</div>
          <div className="CounterHeroText2"><CountUp end={520} duration={2} />+</div>
        </div>
        <div className="CounterHeroTextContainer">
          <LocalHospitalIcon fontSize="large"/>
          <div className = "CounterHeroText1">Hospitals</div>
          <div className="CounterHeroText2"><CountUp end={50} duration={2} />+</div>
        </div>
        <div className="CounterHeroTextContainer">
          {/* <img src="https://kokilabenhospital.com/images/cancer-surgeries.png" alt="" /> */}
          <MedicalServicesIcon fontSize="large"/>
          <div className = "CounterHeroText1">Complex Cancer Surgeries</div>
          <div className="CounterHeroText2"><CountUp end={350} duration={2} />+</div>
        </div>
        <div className="CounterHeroTextContainer">
          <PeopleIcon fontSize="large"/>
          <div className = "CounterHeroText1">Community</div>
          <div className="CounterHeroText2"><CountUp end={50} duration={2} />+</div>
        </div>
        </div>
      </div>
   
    </div>
  );
}