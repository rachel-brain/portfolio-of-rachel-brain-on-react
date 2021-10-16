// import React from 'react';
import React, { useState } from 'react';
import './style.css';

function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    return name === 'firstName' ? setFirstName(value) : setLastName(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${firstName} ${lastName}`);
    setFirstName('');
    setLastName('');
    setMessage('');
  };

  return (
    <div>
      <h1>Contact Me</h1>

      <form className="form">
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message ..."
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      <br />

      <div className="contrast">
      <ul>
        <li className="contact" style={{listStyleType: "none"}}>
          <i class="fa fa-mobile" aria-hidden="true"/> Mobile: 
          <a> +61 432 297 755</a></li>
        <li className="contact" style={{listStyleType: "none"}}>
          <i class="fa fa-envelope" aria-hidden="true"/> E-mail: 
          <a href="mailto:rachel.brain@internode.on.net"> rachel.brain@internode.on.net</a></li>
        <li className="contact" style={{listStyleType: "none"}}>
          <i class="fa fa-linkedin-square" aria-hidden="true"/> LinkedIn: 
          <a href="https://www.linkedin.com/in/rachel-brain-89570930/"> www.linkedin.com/in/rachel-brain</a></li>
        <li className="contact" style={{listStyleType: "none"}}>
          <i class="fa fa-github" aria-hidden="true"/> GitHub: 
          <a href="https://github.com/rachel-brain"> github.com/rachel-brain</a></li>
      </ul>
      <br />
      </div>
      <footer className="footer">
        <h4>More exciting work coming soon ...</h4>
      </footer>
    </div>
  );
}

export default Contact;