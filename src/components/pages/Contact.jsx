import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

  export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <Form>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label>Enter your name</Form.Label>
      <Form.Control as="textarea" rows={1} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Enter your Email address</Form.Label>
      <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
      <Form.Label>Enter your message</Form.Label>
      <Form.Control as="textarea" rows={3} />
      </Form.Group>

      </Form>

      <>
        <Button variant="info">Submit</Button>{' '}
      </>
      <br />
      <br />
      <br />

      <div className="contrast">
      <br />
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