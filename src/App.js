import React, { Component } from 'react';
import Welcome from './components/welcome'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Raleway:300" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Raleway:700" rel="stylesheet"></link>
        <meta charSet="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <Welcome />
      </div>
    );
  }
}

export default App;
