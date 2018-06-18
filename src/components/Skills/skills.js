import React, { Component } from 'react';
import './skills.css';


class Skills extends Component {
  render() {
    return (
      <div className="section Skills">
        <header className="terminal">Skills</header>
          <div id="skills-languages" className="skills-heading">
            <h3><b>Languages</b></h3>
            <ul className="skills-list">
              <li>Python</li>
              <li>Java</li>
              <li>Swift</li>
              <li>Javascript</li>
              <li>HTML & CSS</li>
              <li>R</li>
            </ul>
          </div>

          <div id="skills-frameworks" className="skills-heading">
            <h3><b>Frameworks</b></h3>
            <ul className="skills-list">
              <li>React</li>
              <li>Bootstrap</li>
              <li>Django</li>
            </ul>
          </div>

          <div id="skills-libraries" className="skills-heading">
            <h3><b>Libraries</b></h3>
            <ul className="skills-list">
              <li>JQuery</li>
              <li>SpriteKit</li>
              <li>XGBoost</li>
            </ul>
          </div>

          <div id="skills-tools" className="skills-heading">
            <h3><b>Tools</b></h3>
            <ul className="skills-list">
              <li>Git & GitHub</li>
              <li>Bash</li>
              <li>Grunt</li>
              <li>Airflow</li>
              <li>ElasticSearch</li>
              <li>Dplyr</li>
            </ul>
          </div>
      </div>
    );
  }
}

export default Skills
