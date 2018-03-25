import React from 'react';

import {PaymentBox} from './PaymentBox';
import {colorScheme} from '../../colorScheme.js';

export default function DonationPage(props) {
  const org = props.match.params.orgName;

  return (
    <div style={{justifyContent:"center", display:"flex", flexDirection:"column", alignItems:"center", backgroundColor: '#F0FFF0'}}>
      <h1 style={{color: colorScheme.secondaryColor}}>Donate to {org}!</h1>
      <p>All donations are secured via SSL/TSL, and are completely secure.
        You can be anonymous or leave a message; the choice is yours!
      </p>
      <PaymentBox orgName={org}/>
    </div>
  );
}