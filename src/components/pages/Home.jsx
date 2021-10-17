import React from 'react';
import avatar from '../images/face_co-2021.09.png';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div className="contrast">
      <br />
      <img src={avatar} class ="child" alt="avatar of rachel brain"></img>
      <h2>Rachel Brain</h2>
      <ul>
        <li>Location: Melbourne, Australia</li>
        <li>#1 claim to fame: Melbourne is the most-locked-down city in the world.</li>     
        <li>#2 claim to fame: Melbournians are known as "foodies" & we LOVE our coffee!</li>   
      </ul>
      <br />
      </div>
      <footer className="footer">
        <h4>More exciting work coming soon ...</h4>
      </footer>
    </div>
  );
}