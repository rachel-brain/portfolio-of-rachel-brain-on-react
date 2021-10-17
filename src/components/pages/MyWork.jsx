import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';

import arty from '../images/arty-pants-project-2021.07.JPG';
import gotta from '../images/gotta-keep-em-generated-2021.06.JPG';
import notetaker from '../images/note-taker-app-2021.08.JPG';
import dashboard from '../images/weather-dashboard-2021.07.JPG';
import wipeout from '../images/wizard-wipeout-project-2021.09.JPG';
import scheduler from '../images/workday-scheduler-2021.06.JPG';

export default function MyWork() {
  return (
    <div>
      <h1>Some examples of my Work</h1>
      <h3>Click on the links to be transferred to the repos and/or corresponding websites</h3>

      <Stack direction="horizontal" gap={3}>
      <div className="bg-light border"></div>
      <Card style={{maxWidth: "18rem" }} border="info" >
        <Card.Img variant="top" src={arty} className="card-img" alt="screenshot of arty-pants website" />
        <Card.Body>
          <Card.Title>Arty Pants</Card.Title>
          <Card.Text>
          A world of creativity to motivate artists and art lovers alike 
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href="https://github.com/rachel-brain/creating-art" target="_blank" rel="noreferrer">Click here for GitHub repo</Card.Link>
          <br />
          <Card.Link href="https://rachel-brain.github.io/creating-art/" target="_blank" rel="noreferrer">Click here for deployed website</Card.Link>
        </Card.Body>
      </Card>

      <br />

      <div className="bg-light border"></div>
      <Card style={{maxWidth: "18rem" }} border="info" >
        <Card.Img variant="top" src={wipeout} className="card-img" alt="screenshot of wizard wipeout game login page" />
        <Card.Body>
          <Card.Title>Wizard Wipeout!</Card.Title>
          <Card.Text>
          A single-player game where a player takes on the guise of a wizard and has to avoid fast-moving enemy sprites 
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href="https://github.com/rachel-brain/super-duper-bassoon" target="_blank" rel="noreferrer">Click here for GitHub repo</Card.Link>
          <br />
          <Card.Link href="https://dry-beach-54923.herokuapp.com/" target="_blank" rel="noreferrer">Click here for deployed website</Card.Link>
        </Card.Body>
      </Card>

      <br />

      <div className="bg-light border"></div>
      <Card style={{maxWidth: "18rem" }} border="info" >
        <Card.Img variant="top" src={dashboard} className="card-img" alt="screenshot of weather dashboard" />
        <Card.Body>
          <Card.Title>International weather dashboard</Card.Title>
          <br />
        </Card.Body>
        <Card.Body>
          <Card.Link href="https://github.com/rachel-brain/city-weather-dashboard" target="_blank" rel="noreferrer">Click here for GitHub repo</Card.Link>
          <br />
          <Card.Link href="https://rachel-brain.github.io/city-weather-dashboard/" target="_blank" rel="noreferrer">Click here for deployed website</Card.Link>
        </Card.Body>
      </Card>
      </Stack>

      <br />

      <Stack direction="horizontal" gap={3}>
      <div className="bg-light border"></div>
      <Card style={{maxWidth: "18rem" }} border="info" >
        <Card.Img variant="top" src={gotta} className="card-img" alt="screenshot of simple password generator" />
        <Card.Body>
          <Card.Title>Handy password generator</Card.Title>
          <br />
        </Card.Body>
        <Card.Body>
          <Card.Link href="https://github.com/rachel-brain/generate-passwords" target="_blank" rel="noreferrer">Click here for GitHub repo</Card.Link>
          <br />
          <Card.Link href="https://rachel-brain.github.io/generate-passwords/" target="_blank" rel="noreferrer">Click here for deployed website</Card.Link>
        </Card.Body>
      </Card>

      <br />

      <div className="bg-light border"></div>
      <Card style={{maxWidth: "18rem" }} border="info" >
        <Card.Img variant="top" src={scheduler} className="card-img" alt="screenshot of hourly workday scheduler with color-coding" />
        <Card.Body>
          <Card.Title>Hourly workday scheduler with color-coding</Card.Title>
          <br />
        </Card.Body>
        <Card.Body>
          <Card.Link href="https://github.com/rachel-brain/handy-workday-scheduler" target="_blank" rel="noreferrer">Click here for GitHub repo</Card.Link>
          <br />
          <Card.Link href="https://rachel-brain.github.io/handy-workday-scheduler/" target="_blank" rel="noreferrer">Click here for deployed website</Card.Link>
        </Card.Body>
      </Card>

      <br />

      <div className="bg-light border"></div>
      <Card style={{maxWidth: "18rem" }} border="info" >
        <Card.Img variant="top" src={notetaker} className="card-img" alt="screenshot of note taker app" />
        <Card.Body>
          <Card.Title>Note-taker app deployed on Heroku</Card.Title>
          <br />
        </Card.Body>
        <Card.Body>
          <Card.Link href="https://github.com/rachel-brain/handy-note-taker" target="_blank" rel="noreferrer">Click here for GitHub repo</Card.Link>
          <br />
          <Card.Link href="https://evening-lowlands-85052.herokuapp.com/" target="_blank" rel="noreferrer">Click here for deployed website</Card.Link>
        </Card.Body>
      </Card>
      </Stack>

      <br />

      <br />
      <footer className="footer">
        <h4>More exciting work coming soon ...</h4>
      </footer>
    </div>
  );
}