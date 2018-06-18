import React, { Component } from 'react';
import './projects.css';
import Project from './Project/project'
import ceres from '../../images/ceresIcon.png';
import alien from '../../images/alien_tmp.png'
import projectDescriptions from './projectDescriptions.json';

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <header className="terminal">Projects</header>
        <div className="projects-main">
          <Project className="project" name="Expedition Ceres" image={ceres} description={projectDescriptions["Ceres"]} tech={['Swift 3', 'SpriteKit']}/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Project name="This Website!" image={alien} description={projectDescriptions["Website"]} tech={['HTML5', 'CSS3', 'JavaScript', 'React']}/>
        </div>
      </div>
    );
  }
}

export default Projects
