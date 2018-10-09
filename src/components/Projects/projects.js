import React, { Component } from 'react';
import './projects.css';
import Project from './Project/project'
import ceres from '../../images/ceresIcon.png';
import alien from '../../images/alien_tmp.png';
import runColorRun from '../../images/runColorRun.png';
import projectDescriptions from './projectDescriptions.json';

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <header className="terminal">Projects</header>
        <div className="projects-main">
          <Project name="Expedition Ceres" link="https://itunes.apple.com/us/app/expedition-ceres/id1226868158?mt=8" target="_blank" image={ceres} description={projectDescriptions["Ceres"]} tech={['Swift', 'SpriteKit']}/>
          <Project name="This Website!" link="" image={alien} description={projectDescriptions["Website"]} tech={['HTML', 'CSS', 'JavaScript', 'React']}/>
          <Project name="Run Color Run" image={runColorRun} description={projectDescriptions["RunColorRun"]} tech={['Ionic', 'Angular', 'JavaScript', 'CSS']}/>
        </div>
      </div>
    );
  }
}

export default Projects
