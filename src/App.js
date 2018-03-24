import React, { Component } from 'react';

import HorizontalTimeline from "./Components/HorizontalTimeline";
import Button from "./Components/Buttons";

import './App.css';

const VALUES = ["10-10-1997","10-10-1998","10-10-1999", "10-10-2000", "10-10-2001",
                "10-10-2002", "10-10-2003", "10-10-2004"];


const styles = {
  timeline: {
    width: 'center',
    height: '100px',
    margin: '20px',
    fontSize: '15px'
    
  }

const TEXT = ["Charity 1", "Charity 2", "Charity 3", "Charity 4", "Charity 5", "Charity 6", "Charity 7", "Charity 8"]

}


const VALUES = [ "10-10-1997","10-10-1998","10-10-1999"];

class App extends Component {
  state = { value: 0, previous: 0 };
  render() {
    return (
      <div>
        {/* Bounding box for the Timeline */}

        <div style={styles.timeline}>
          <HorizontalTimeline
            index={this.state.value}

            indexClick={(index) => {
              this.setState({ value: index, previous: this.state.value });
            }}

            values={VALUES} />
        </div>

        <div>
          <p>{TEXT[this.state.value]}</p>
        </div>

      </div>

    );

  }
}

export default App;
