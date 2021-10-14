import React from 'react';
import Card from 'react-bootstrap/Card';
import './style.css';

import arty from '../images/arty-pants-project-2021.07.JPG'
import gotta from '../images/gotta-keep-em-generated-2021.06.JPG'
import notetaker from '../images/note-taker-app-2021.08.JPG'
import dashboard from '../images/weather-dashboard-2021.07.JPG'
import wipeout from '../images/wizard-wipeout-project-2021.09.JPG'
import scheduler from '../images/workday-scheduler-2021.06.JPG'

export default function MyWork() {
  return (
    <div>
      <h1>Some examples of my Work</h1>
      <h3>Click on an image to be transferred to its corresponding website</h3>
      <Card style={{maxWidth: "540px"}}>
      <div className="card-a mb-3"/>
        <div className="row no-gutters">
          <div className="col-md-4 example">
            <a href="https://rachel-brain.github.io/creating-art/" target="_blank" rel="noreferrer">
              <img src={arty} className="card-img" alt="screenshot of arty-pants website"/></a>  
          </div>
          <div className="col-md-8">
            <div className="card-body">
            <h2 className="card-title">Arty Pants</h2>
            <p className="card-text">A world of creativity to motivate artists and art lovers alike</p>
            <p className="card-text"><small className="text-muted">Click here for GitHub repo: </small></p>
            <a href="https://github.com/rachel-brain/creating-art" target="_blank" rel="noreferrer">https://github.com/rachel-brain/creating-art</a>
          </div>
        </div>
      </div>
      </Card>

      <Card style={{maxWidth: "540px"}}>
      <div className="card-b mb-3"/>
        <div className="row no-gutters">
          <div className="col-md-4 example">
            <a href="https://dry-beach-54923.herokuapp.com/" target="_blank" rel="noreferrer">
              <img src={wipeout} className="card-img" alt="screenshot of wizard wipeout game login page"/></a>
          </div>
          <div className="col-md-8">
            <div className="card-body">
            <h2 className="card-title">Wizard Wipeout!</h2>
            <p className="card-text">A single-player game where a player takes on the guise of a wizard and has to avoid fast-moving enemy sprites</p>
            <p className="card-text"><small className="text-muted">Click here for GitHub repo: </small></p>
            <a href="https://github.com/rachel-brain/super-duper-bassoon" target="_blank" rel="noreferrer">https://github.com/rachel-brain/super-duper-bassoon</a>
          </div>
        </div>
      </div>
      </Card>

      <Card style={{maxWidth: "540px"}}>
      <div className="card-a mb-3"/>
        <div className="row no-gutters">
          <div className="col-md-4 example">
            <a href="https://rachel-brain.github.io/city-weather-dashboard/" target="_blank" rel="noreferrer">
                <img src={dashboard} className="card-img" alt="screenshot of weather dashboard"/></a>
          </div>
          <div className="col-md-8">
            <div className="card-body">
            <h2 className="card-title">An international weather dashboard</h2>
            <p className="card-text"><small className="text-muted">Click here for GitHub repo: </small></p>
            <a href="https://github.com/rachel-brain/city-weather-dashboard" target="_blank" rel="noreferrer">https://github.com/rachel-brain/city-weather-dashboard</a>
          </div>
        </div>
      </div>
      </Card>

      <Card style={{maxWidth: "540px"}}>
      <div className="card-b mb-3"/>
        <div className="row no-gutters">
          <div className="col-md-4 example">
            <a href="https://rachel-brain.github.io/generate-passwords/" target="_blank" rel="noreferrer">
              <img src={gotta} className="card-img" alt="screenshot of simple password generator"/></a>
          </div>
          <div className="col-md-8">
            <div className="card-body">
            <h2 className="card-title">A handy password generator</h2>
            <p className="card-text"><small className="text-muted">Click here for GitHub repo: </small></p>
            <a href="https://github.com/rachel-brain/generate-passwords" target="_blank" rel="noreferrer">https://github.com/rachel-brain/generate-passwords</a>
          </div>
        </div>
      </div>
      </Card>

      <Card style={{maxWidth: "540px"}}>
      <div className="card-a mb-3"/>
        <div className="row no-gutters">
          <div className="col-md-4 example">
          <a href="https://rachel-brain.github.io/handy-workday-scheduler/" target="_blank" rel="noreferrer">
              <img src={scheduler} className="card-img" alt="screenshot of hourly workday scheduler with color-coding"/></a>
          </div>
          <div className="col-md-8">
            <div className="card-body">
            <h2 className="card-title">An hourly workday scheduler with color-coding</h2>
            <p className="card-text"><small className="text-muted">Click here for GitHub repo: </small></p>
            <a href="https://github.com/rachel-brain/handy-workday-scheduler" target="_blank" rel="noreferrer">https://github.com/rachel-brain/handy-workday-scheduler</a>
          </div>
        </div>
      </div>
      </Card>

      <Card style={{maxWidth: "540px"}}>
      <div className="card-b mb-3"/>
        <div className="row no-gutters">
          <div className="col-md-4 example">
          <a href="https://evening-lowlands-85052.herokuapp.com/" target="_blank" rel="noreferrer">
              <img src={notetaker} className="card-img" alt="screenshot of note taker app"/></a>
          </div>
          <div className="col-md-8">
            <div className="card-body">
            <h2 className="card-title">A note taker app deployed on Heroku</h2>
            <p className="card-text"><small className="text-muted">Click here for GitHub repo: </small></p>
            <a href="https://github.com/rachel-brain/handy-note-taker" target="_blank" rel="noreferrer">https://github.com/rachel-brain/handy-note-taker</a>
          </div>
        </div>
      </div>
      </Card>
      <br></br>
    </div>
  );
}