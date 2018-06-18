import React, { Component } from 'react';
import './project.css';

class Project extends Component {
  render() {
    const technologies = this.props.tech.map((technology) => <span className="tech"> {technology} </span>);

    return(
      <div className="projects-main">
        <div className="project">
          <img src={this.props.image} alt="Expedition Ceres iOS app"></img>
          <div className="projects-text">
            <h2 className="terminal project-name"> {this.props.name} </h2>
            <p className="project-description"> {this.props.description} </p>
          </div>
          <span className="project-tech">
            {technologies}
          </span>
        </div>
      </div>
    );
  }
}

export default Project
