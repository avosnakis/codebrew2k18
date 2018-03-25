import React from 'react';
import ReactDOM from 'react-dom';

import OrganisationScroller from './OrganisationScroller.jsx';
import {colorScheme} from '../../colorScheme.js'

export default function HomePage(props) {
  return (
    <div style={{color: colorScheme.secondaryColor}}>
      <OrganisationScroller/>
    </div>
  );
}