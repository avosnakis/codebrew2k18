import React from 'react';
import ReactDOM from 'react-dom';

import Button from 'material-ui/Button';
import ArrowBack from 'material-ui-icons/ArrowBack';
import AttachMoney from 'material-ui-icons/AttachMoney';

import CHARITIES from '../../api.js';

const orgStyle = {
	color: 'DarkSlateGray'
}

export default function ButtonHeader(props) {
	const org = props.org;

  return (
	  <div style={orgStyle}>	
      <h1>{org}</h1> 
			<Button style={{width:"100px"}}>
				<ArrowBack />&nbsp;&nbsp;Back
			</Button>
			<Button style={{width:"100px"}}>
				<AttachMoney />&nbsp;&nbsp;Donate
			</Button>
    </div>
  )
}