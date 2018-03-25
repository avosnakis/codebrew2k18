import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Main} from './Components/Main.jsx';
import NavBar from './Components/NavBar.jsx';
import Hover from './Components/Hover.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hover/>
        <NavBar/>
        <Main/>
      </div>
    );
  }
}

export default App;
