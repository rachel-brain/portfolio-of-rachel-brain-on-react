import React from 'react';
import regex from '../images/image-of-a-regex.png';

export default function Blog() {
  return (
    <div>
      <h1>My Blog</h1>
      <div className="contrast">
      <br />
      <h2>Title: Hex is a Regex!</h2>
      <img src={regex} className="regex-img" alt="a simple regex"/>
      <br />
      <p><a href="https://gist.github.com/rachel-brain/1b6a313075611f6a0b1c17b99609ee92" target="_blank" rel="noreferrer"> Click here for my blog on Gist/GitHub</a></p>
      <br />
      </div>
      <footer className="footer">
        <h4>More exciting work coming soon ...</h4>
      </footer>
    </div>
  );
}