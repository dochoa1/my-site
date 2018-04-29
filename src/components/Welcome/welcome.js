import React, { Component } from 'react';
import Typing from './Typed/typed'
import './welcome.css';
import alien from '../../images/alien_tmp.png'

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome container">
        <span className="terminal" id="typed">
          <Typing
            strings={[
              '^1000',
              'Hello, ^1500World',
              'Hello, ^1000friend',
              'Hello, ^1000Mom',
              'Hello, ^1000web scraping spider',
              'Hello, ^1000future employer',
              'Hello, ^1000product of Google\'s PageRank algorithm',
            ]}
            loop={true}
            showCursor={true}
        />
        </span>
        <br/>
        <img src={alien} alt="The beautiful author of this site, me!" id="alien-pic"/>
        <br/>
        <div id="welcome-intro-description">
        I'm <b className="terminal">Daniel Ochoa</b>, a user-minded full-stack software engineer focused
        on building products that have a positive impact on all of us.
        </div>
        <br/>
        <address id="contact-me">
          Hit me up<span className="terminal" id="contact-arrow"> ---> </span><a href="mailto:dochoa@macalester.edu">dochoa@macalester.edu</a>
        </address>
      </div>
    );
  }
}

export default Welcome
