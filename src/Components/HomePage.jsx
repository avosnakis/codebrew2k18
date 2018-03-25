import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './NavBar.jsx';
import OrganisationScroller from './OrganisationScroller.jsx';
import Hover from './Hover.jsx';


export default function HomePage(props) {
  return (
    <div>
      <Hover/>
      <NavBar/>
      <OrganisationScroller/>
    </div>
  );
}