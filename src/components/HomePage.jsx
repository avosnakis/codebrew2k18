import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './NavBar.jsx';
import OrganisationScroller from './OrganisationScroller.jsx';


export default function HomePage(props) {
  return (
    <div>
      <NavBar/>
      <OrganisationScroller/>
    </div>
  );
}