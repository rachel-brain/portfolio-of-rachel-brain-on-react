import React from 'react';
import './style.css';

export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <div className="contrast">
      <ul>
        <li className="contact" style={{listStyleType: "none"}}><i class="fa fa-mobile" aria-hidden="true"/> Mobile: <a> +61 432 297 755</a></li>
        <li className="contact" style={{listStyleType: "none"}}><i class="fa fa-envelope" aria-hidden="true"/> E-mail: <a href="mailto:rachel.brain@internode.on.net"> rachel.brain@internode.on.net</a></li>
        <li className="contact" style={{listStyleType: "none"}}><i class="fa fa-linkedin-square" aria-hidden="true"/> LinkedIn: <a href="https://www.linkedin.com/in/rachel-brain-89570930/"> www.linkedin.com/in/rachel-brain</a></li>
        <li className="contact" style={{listStyleType: "none"}}><i class="fa fa-github" aria-hidden="true"/> GitHub: <a href="https://github.com/rachel-brain"> github.com/rachel-brain</a></li>
      </ul>
      <br></br>
      </div>
    </div>
  );
}