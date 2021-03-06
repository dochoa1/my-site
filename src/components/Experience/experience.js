import React, { Component } from 'react';
import Job from './Job/job';
import './experience.css';
import resume from './resume.pdf'

class Experience extends Component {
  render() {
    return (
      <div className="section experience">
        <header className="terminal">Experience</header>
        <div>
          <Job institution="Google" link="https://www.google.com" position="Engineering Resident" timeline="July 2018 - Present"/>
          <Job institution="Macalester College" link="https://www.macalester.edu/" position="Preceptor" timeline="Jan 2017 - May 2018"/>
          <Job institution="Infinite Campus" link="https://www.infinitecampus.com/" position="Software Engineering Intern" timeline="June - Aug 2017"/>
          <Job institution="Macalester College" link="https://www.macalester.edu/" position="Cognative Psychology Research Assistant" timeline="Sept 2015 - Jan 2017"/>
          <Job institution="University of Miami" link="https://welcome.miami.edu/" position="Computer Science Research Assistant" timeline="June - Aug 2016"/>
          <h4>
            <b>Check out my resume!</b>
            <a href={resume} target="_blank"><i className="far fa-file-alt terminal" id="resumeImage"></i></a>
          </h4>
        </div>
      </div>
    );
  }
}

export default Experience
