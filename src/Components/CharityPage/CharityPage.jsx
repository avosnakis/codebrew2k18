import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './NavBar.jsx';
import HorizontalTimeline from './HorizontalTimeline.jsx'
import SimpleMediaCard from './SimpleMediaCard.jsx'


const VALUES = ["10-10-1997","10-10-1998","10-10-1999", "10-10-2000", "10-10-2001",
               "10-10-2002", "10-10-2003", "10-10-2004"];

const TEXT = ["Charity 1", "Charity 2", "Charity 3", "Charity 4", "Charity 5", "Charity 6", "Charity 7", "Charity 8"];
const divStyle = {
  width: '100%',
  height: '100px',
  margin: '0 auto',
  fontSize: '15px'
}

export default class CharityPage extends React.Component {

 state = {value: 0, previos:0}
  render(){return(
    <div>
      <NavBar/>
        <div>
         {/* Bounding box for the Timeline */}
         <div style={divStyle}>
           <HorizontalTimeline
             index={this.state.value}

             indexClick={(index) => {
               this.setState({ value: index, previous: this.state.value });
             }}

             values={VALUES} />
         </div>

         <div>
           {TEXT[this.state.value]}
         </div>
       </div>

      <SimpleMediaCard />
      <SimpleMediaCard />
      <SimpleMediaCard />
      </div>

  )};
}
