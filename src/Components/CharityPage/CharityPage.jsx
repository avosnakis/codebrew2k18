import React from 'react';
import ReactDOM from 'react-dom';

import HorizontalTimeline from './HorizontalTimeline.jsx';
import SimpleMediaCard from './SimpleMediaCard.jsx';

import CHARITIES from '../../api.js';


const VALUES = ["10-10-1997","10-10-1998","10-10-1999", "10-10-2000", "10-10-2001",
               "10-10-2002", "10-10-2003", "10-10-2004"];

const TEXT = ["Charity 1", "Charity 2", "Charity 3", "Charity 4", "Charity 5", "Charity 6", "Charity 7", "Charity 8"];
const divStyle = {
  width: 'center',
  height: '100px',
  margin: '20px',
  fontSize: '15px'
}

export default class CharityPage extends React.Component {
  constructor(props) {
    console.log(props)
    super(props);
    this.state = {
      value: 0, 
      previous: 0
    };
    this.org = CHARITIES[this.props.match.params.orgName];
  }

  render() {
    return (
      <div>
        <div>
          {/* Bounding box for the Timeline */}
          <div style={divStyle}>
            <HorizontalTimeline
              index={this.state.value}
              indexClick={(index) => {
                this.setState({ value: index, previous: this.state.value });
              }}
              values={makeDatesList(this.org.timeline)} />
          </div>
        </div>
        <SimpleMediaCard 
          img={this.org.timeline[this.state.value].img} 
          desc={this.org.timeline[this.state.value].desc}
          title={this.org.timeline[this.state.value].title
        }/>
      </div>
    )
  };
}

const makeDatesList = timeline => {
  let arr = [];
  for (let i = 0; i < timeline.length; i++) {
    arr.push(timeline[i].date);
  }
  return arr;
};