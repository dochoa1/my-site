import React, { Component } from 'react';
import './projects.css';
import Project from './Project/project'
import ceres from '../../images/ceresIcon.png';
import alien from '../../images/alien_tmp.png'
import resumeImage from '../../images/resume_image.png'
import projectDescriptions from './Resources/projectDescriptions.json';
import resume from './Resources/resume.pdf'

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <header className="terminal">Projects</header>
        <div className="projects-main">
          <Project className="project" name="Expedition Ceres" image={ceres} description={projectDescriptions["Ceres"]} tech={['Swift 3', 'SpriteKit']}/>
          <br/>
          <br/>
          <Project name="This Website!" image={alien} description={projectDescriptions["Website"]} tech={['HTML5', 'CSS3', 'JavaScript', 'React']}/>
          <br/>
          <br/>
          <p>I got you interested? Check out my resume!
            <a href={resume}><img src={resumeImage} alt="A document icon" id='resumeImage'></img></a>
          </p>
        </div>
      </div>
    );
  }
}

export default Projects
