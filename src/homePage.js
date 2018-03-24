import React, { Component } from 'react';
import logo from './logo.svg';
import './homePage.css';

class homePage extends Component {
  render(){
    return (
      <div className="homePage">
        <header className="homePage-header">
          <img src={logo} className="homePage-logo" alt="logo" />
          <h1 className="homePage-title">Welcome to React</h1>
        </header>
        <p className="homePage-intro">
          To get started, edit <code>src/homePage.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default homePage;
