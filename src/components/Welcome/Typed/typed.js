import React, { Component } from 'react';
import Typed from 'typed.js'
import './typed.css';

class Typing extends Component {
  componentDidMount() {
  	// If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings, loop, showCursor } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
    	strings: strings,
      backDelay: 1000,
      typeSpeed: 30,
      backSpeed: 25,
      loop: loop,
      showCursor: showCursor,
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
  	// Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <span className="wrap">
        <link href="https://fonts.googleapis.com/css?family=VT323" rel="stylesheet"></link>
        <span className="type-wrap">
          <span
            style={{ whiteSpace: 'pre' }}
            ref={(el) => { this.el = el; }}
          />
        </span>
      </span>
    );
  }
}

export default Typing
