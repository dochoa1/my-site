import React, { Component } from 'react';
import Typing from './typed'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../component_styles/welcome.css';
import alien from '../images/alien_tmp.png'

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome container-fluid col-sm-11">
        <div className="welcome-intro">
          <span className="terminal" id="typed-line">
            <Typing
              strings={['Hello,']}
              loop={false}
              showCursor={false}
            />
            <span> </span> {/* To put a space in between the two Typing components */}
            <Typing
              strings={[
                '^390World',
                '^1000friend',
                '^1000Mom',
                '^1000web scraping spider',
                '^1000future employer',
                '^1000product of Google\'s PageRank algorithm',
                '^1000'
              ]}
              loop={true}
              showCursor={true}
          />
          </span>
          <br/>
          <img src={alien} alt="The beautiful author of this site, me!" id="alien-pic"/>
          <br/>
          <div id="welcome-intro-description" className="col-sm-7">
          I'm <b>Daniel Ochoa</b>, a user-minded full-stack software engineer focused
          on building products that have a positive impact on all of us.
          </div>
          <br/>
          <address id="contact-me">
            Hit me up<span className="terminal" id="contact-arrow"> ---> </span><a href="mailto:dochoa@macalester.edu">dochoa@macalester.edu</a>
          </address>
        </div>
      </div>
    );
  }
}

export default Welcome
