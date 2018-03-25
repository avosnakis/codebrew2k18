import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

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