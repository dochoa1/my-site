import React, { Component } from 'react';
import './job.css'

class Job extends Component {
  render() {
    return (
      <div className="job">
        <link href="https://fonts.googleapis.com/css?family=Abel" rel="stylesheet"></link>
        <span className="institution"><b> <a href={this.props.link} target="_blank">{this.props.institution}</a> </b></span>
        <span className="timeline"> {this.props.timeline} </span>
        <br/>
        <span className="position"> {this.props.position} </span>
      </div>
    );
  }
}

export default Job
