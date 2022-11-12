import React from 'react'
import TeamCardArea from '../components/TeamCardArea'

import "../assets/css/Collections.css";
import TeamCard from '../components/TeamCard';
import Navbar from '../components/Navbar';

function Team() {
  return (
    <div className='collections'>
      <Navbar></Navbar>
        <h1  className='TeamHead display-1 text-light text-center font-weight-bolder mb-5'>Contributors</h1>
        <TeamCardArea />
    </div>
  )
}

export default Team