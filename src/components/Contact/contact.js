import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import './contact.css';
import alien from '../../images/alien_tmp.png'

let scroll = Scroll.animateScroll;

class Contact extends Component {
  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <div className="Contact">
        <header className="terminal"> {'-----------> Get In Touch! <-----------'}</header>
        <div>
          <a href="mailto:dochoa@macalester.edu"><i class="far fa-envelope fa-2x font-awesome"></i></a>
          <a href="https://github.com/dochoa1" target="_blank"><i class="fab fa-github fa-2x font-awesome"></i></a>
          <a href="https://www.linkedin.com/in/daniel-ochoa-8b2416a9/" target="_blank"><i class="fab fa-linkedin fa-2x font-awesome"></i></a>
          <a href="https://www.facebook.com/profile.php?id=100012335137244" target="_blank"><i class="fab fa-facebook-square fa-2x font-awesome"></i></a>
          <a href="https://open.spotify.com/user/danny_dork" target="_blank"><i class="fab fa-spotify fa-2x font-awesome"></i></a>
          <a href="https://twitter.com/danny_dork" target="_blank"><i class="fab fa-twitter fa-2x font-awesome"></i></a>
        </div>
        <img onClick={this.scrollToTop} src={alien} alt="My website's mascot" id="alien-pic"/>
        <p>© Daniel Ochoa 2018</p>
      </div>
    );
  }
}

export default Contact
