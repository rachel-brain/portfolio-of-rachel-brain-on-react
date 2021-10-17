import React from 'react';
import Card from 'react-bootstrap/Card';

import cv from '../rachel_brain-2021.09.pdf';

  export default function Resume() {
  return (
    <div>
      <h1>My Resume</h1>
      <br />
      <Card style={{maxWidth: "18rem" }} border="info" >
        <Card.Body>
          <br />
          <Card.Link href={cv} target="_blank" rel="noreferrer">Download my Resume here</Card.Link>
          <br />
        </Card.Body>
      </Card>

      <br />
      <br />
      <footer className="footer">
        <h4>More exciting work coming soon ...</h4>
      </footer>
    </div>
  );
}