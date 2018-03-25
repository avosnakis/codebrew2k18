import React from 'react';
import ReactDOM from 'react-dom';

import HorizontalTimeline from './HorizontalTimeline.jsx';
import SimpleMediaCard from './SimpleMediaCard.jsx';

import CHARITIES from '../../api.js';

const divStyle = {
  width: 'center',
  height: '100px',
  margin: '10px',
  fontSize: '15px'
}

export default class CharityPage extends React.Component {
  constructor(props) {
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