import React from 'react';
import './style.css';

export default function MyWork() {
  return (
    <div>
      <h1>Some examples of my Work</h1>
      <h3>Click on an image to be transferred to each website</h3>

      <div className="card mb-3" style={{maxWidth: "540px", borderRadius: "10px"}}/>
        <div className="row no-gutters">
          <div className="col-md-4 example">
            <a href="https://rachel-brain.github.io/creating-art/" target="_blank">
              <img src="../images/arty-pants-project-2021.07.JPG" className="card-img" alt="screenshot of arty-pants website"/></a>  
          </div>
          <div className="col-md-8">
            <div className="card-body">
            <h2 className="card-title">Arty Pants</h2>
            <p className="card-text">A world of creativity to motivate artists and art lovers alike</p>
            <a href="https://github.com/rachel-brain/creating-art" target="_blank"><strong> Click here for
                        GitHub repo: </strong>https://github.com/rachel-brain/creating-art</a>
            <p className="card-text"><small className="text-muted">Do I need this?</small></p>
          </div>
        </div>
      </div>

      <div className="card mb-3" style={{maxWidth: "540px", borderRadius: "10px"}}/>
        <div className="row no-gutters">
          <div className="col-md-4 example">
            <a href="https://dry-beach-54923.herokuapp.com/" target="_blank">
              <img src="../images/wizard-wipeout-project-2021.09.JPG" className="card-img" alt="screenshot of wizard wipeout game login page"/></a>
          </div>
          <div className="col-md-8">
            <div className="card-body">
            <h2 className="card-title">Wizard Wipeout!</h2>
            <p className="card-text">A single-player game where a player takes on the guise of a wizard and has to
                        avoid fast-moving enemy sprites</p>
            <a href="https://github.com/rachel-brain/super-duper-bassoon" target="_blank"><strong> Click here
                        for GitHub repo: </strong>https://github.com/rachel-brain/super-duper-bassoon</a>
            <p className="card-text"><small className="text-muted">Do I need this?</small></p>
          </div>
        </div>
      </div>

      <div className="card mb-3" style={{maxWidth: "540px", borderRadius: "10px"}}/>
        <div className="row no-gutters">
          <div className="col-md-4 example">
            <a href="https://rachel-brain.github.io/city-weather-dashboard/" target="_blank">
                <img src="../images/weather-dashboard-2021.07.JPG" className="card-img" alt="screenshot of weather dashboard"/></a>
          </div>
          <div className="col-md-8">
            <div className="card-body">
            <h2 className="card-title">An international weather dashboard</h2>
            <p className="card-text">What more can I say here?!!</p>
            <a href="https://github.com/rachel-brain/city-weather-dashboard" target="_blank"><strong> Click here
                for GitHub repo: </strong>https://github.com/rachel-brain/city-weather-dashboard</a>
            <p className="card-text"><small className="text-muted">Do I need this?</small></p>
          </div>
        </div>
      </div>

      <div className="card mb-3" style={{maxWidth: "540px", borderRadius: "10px"}}/>
        <div className="row no-gutters">
          <div className="col-md-4 example">
            <a href="https://rachel-brain.github.io/generate-passwords/" target="_blank">
              <img src="../images/gotta-keep-em-generated-2021.06.JPG" className="card-img" alt="screenshot of simple password generator"/></a>
          </div>
          <div className="col-md-8">
            <div className="card-body">
            <h2 className="card-title">A handy password generator</h2>
            <p className="card-text">What more can I say here?!!</p>
            <a href="https://github.com/rachel-brain/generate-passwords" target="_blank"><strong> Click here for
                GitHub repo: </strong>https://github.com/rachel-brain/generate-passwords</a>
            <p className="card-text"><small className="text-muted">Do I need this?</small></p>
          </div>
        </div>
      </div>

      <div className="card mb-3" style={{maxWidth: "540px", borderRadius: "10px"}}/>
        <div className="row no-gutters">
          <div className="col-md-4 example">
          <a href="https://rachel-brain.github.io/handy-workday-scheduler/" target="_blank">
              <img src="../images/workday-scheduler-2021.06.JPG" className="card-img" alt="screenshot of hourly workday scheduler with color-coding"/></a>
          </div>
          <div className="col-md-8">
            <div className="card-body">
            <h2 className="card-title">An hourly workday scheduler with color-coding</h2>
            <p className="card-text">What more can I say here?!!</p>
            <a href="https://github.com/rachel-brain/handy-workday-scheduler" target="_blank"><strong> Click
                here for GitHub repo: </strong>https://github.com/rachel-brain/handy-workday-scheduler</a>
            <p className="card-text"><small className="text-muted">Do I need this?</small></p>
          </div>
        </div>
      </div>

      <div className="card mb-3" style={{maxWidth: "540px", borderRadius: "10px"}}/>
        <div className="row no-gutters">
          <div className="col-md-4 example">
          <a href="https://evening-lowlands-85052.herokuapp.com/" target="_blank">
              <img src="../images/note-taker-app-2021.08.JPG" className="card-img" alt="screenshot of note taker app"/></a>
          </div>
          <div className="col-md-8">
            <div className="card-body">
            <h2 className="card-title">A note taker app deployed on Heroku</h2>
            <p className="card-text">What more can I say here?!!</p>
            <a href="https://github.com/rachel-brain/handy-note-taker" target="_blank"><strong> Click here for
                GitHub repo: </strong>https://github.com/rachel-brain/handy-note-taker</a>
            <p className="card-text"><small className="text-muted">Do I need this?</small></p>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}