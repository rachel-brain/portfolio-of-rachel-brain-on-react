import React from 'react';
import './style.css';

import regex from '../images/image-of-a-regex.png'

export default function Blog() {
  return (
    <div>
      <h1>My Blog</h1>
      <div className="contrast">
      <h2>Title: Hex is a Regex!</h2>
      <img src={regex} className="regex-img" alt="a simple regex"/>
      <p><a href="https://gist.github.com/rachel-brain/1b6a313075611f6a0b1c17b99609ee92"> gist.github.com/rachel-brain</a></p>
      <br />
      </div>
      <footer className="footer">
        <h4>More exciting work coming soon ...</h4>
      </footer>
    </div>
  );
}