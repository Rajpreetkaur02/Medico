import React from 'react'
// import CardArea from '../components/CardArea';
import "../assets/css/Collections.css";
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
// import Wrapper from  '../components/Wrapper';

const Collections = (props) => {
  return (
    <div className="collections">
      <Navbar/>
      <SearchBar/>
    </div>
  )
}

export default Collections;