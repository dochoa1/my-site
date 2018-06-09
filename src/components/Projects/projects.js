import React, { Component } from 'react';
import './projects.css';
import ceres from '../../images/ceresIcon.png';

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <header className="terminal">Projects</header>
        <div className="projects-main">
          <div className="project">
            <img src={ceres} alt="Expedition Ceres iOS app"></img>
            <h2 className="terminal project-name">Expedition Ceres</h2>
            <p className="project-description">
              Expedition Ceres is a native iOS 2D game built using Swift 3 and SpriteKit.
              The user is tasked with collecting as many rare space gems as possible.
              The app was built as part of Software Design and Development course at Macalester College
              and was built in a team of four.
            </p>
            <span className="project-tech">
              <span className="tech">Swift 3</span>
              <span className="tech">SpriteKit</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects
