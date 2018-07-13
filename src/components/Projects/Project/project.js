import React, { Component } from 'react';
import './project.css';

class Project extends Component {
  render() {
    const technologies = this.props.tech.map((technology) => <span className="tech"> {technology} </span>);

    return(
      <div className="projects-main">
        <div className="project">
          <img src={this.props.image} alt="Expedition Ceres iOS app"></img>
          <div id="project-name-container">
            <h2 className="terminal project-name"> <a href={this.props.link} target={this.props.target || "_self"}>{this.props.name}</a></h2>
          </div>
          <p className="project-description"> {this.props.description} </p>
          <span className="project-tech">
            {technologies}
          </span>
        </div>
      </div>
    );
  }
}

export default Project
