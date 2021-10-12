import React from 'react';
import './style.css';
import avatar from '../images/face_co-2021.09.png'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <img src={avatar} align="center" alt="avatar of rachel brain"></img>
      <ul>
        <li>Location: Melbourne, Australia</li>
        <li>Our #1 claim to fame: Melbourne is the most-locked-down city in the world!</li>     
        <li>Our #2 claim to fame: Melbournians LOVE coffee!</li>   
      </ul>
    </div>
  );
}