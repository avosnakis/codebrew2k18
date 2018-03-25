import React from 'react';
import ReactDOM from 'react-dom';

import Button from 'material-ui/Button';

import CHARITIES from '../../api.js';

const orgStyle = {
    color: 'DarkSlateGray'
}

export default function ButtonHeader(props) {
    const org = props.org;

    return (
        <div style={orgStyle}>  
            <h1>{org}</h1>
            <Button>Back</Button>
            <Button style={{paddingLeft:"75%"}}>Donate</Button>
        </div>
    )
}