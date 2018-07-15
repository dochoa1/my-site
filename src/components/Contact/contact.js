import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import './contact.css';
import alien from '../../images/alien_tmp.png'

let scroll = Scroll.animateScroll;

class Contact extends Component {
  scrollToTop() {
    scroll.scrollToTop();
  }

  createHyphensString() {
    /* Used to create the appropriate number of hyphens for different screen sizes. */
    let numHyphens;
    if (window.innerWidth > 992) {  // Large devices (desktops)
      numHyphens = 10;
    }
    else if (window.innerWidth > 768) {  // Medium devices (tablets)
      numHyphens = 8;
    }
    else if (window.innerWidth > 544) { // Small devices (landscape phones)
      numHyphens = 6
    }
    else {  // Smallest devices (portrait phones)
      numHyphens = 4
    }
    return "-".repeat(numHyphens)
  }

  render() {
    return (
      <div className="Contact">
        <header className="terminal"> {this.state.hyphens + '> Get In Touch! <' + this.state.hyphens}</header>
        <div id="accounts">
          <a href="mailto:dochoa@macalester.edu" id="mail"><i class="far fa-envelope fa-2x font-awesome"></i></a>
          <a href="https://github.com/dochoa1" id="github" target="_blank" rel="noopener noreferrer"><i class="fab fa-github fa-2x font-awesome"></i></a>
          <a href="https://www.linkedin.com/in/daniel-ochoa-8b2416a9/" id="linkedin" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin fa-2x font-awesome"></i></a>
          <a href="https://www.facebook.com/profile.php?id=100012335137244" id="facebook" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-square fa-2x font-awesome"></i></a>
          <a href="https://open.spotify.com/user/danny_dork" id="spotify" target="_blank" rel="noopener noreferrer"><i class="fab fa-spotify fa-2x font-awesome"></i></a>
          <a href="https://twitter.com/danny_dork" id="twitter" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter fa-2x font-awesome"></i></a>
        </div>
        <img onClick={this.scrollToTop} src={alien} alt="My website's mascot" id="alien-pic"/>
        <p>© Daniel Ochoa 2018</p>
      </div>
    );
  }

  updateHyphens() {
      this.setState({hyphens: this.createHyphensString()});
  }

  componentWillMount() {
      this.updateHyphens();
      window.addEventListener("resize", this.updateHyphens.bind(this));
  }

  componentWillUnmount() {
      window.removeEventListener("resize", this.updateHyphens.bind(this));
  }
}

export default Contact
