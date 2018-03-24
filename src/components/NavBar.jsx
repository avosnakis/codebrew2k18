import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import ToolBar from 'material-ui/Toolbar';
import { createMuiTheme } from 'material-ui/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
};

export default function NavBar(props) {
    return (
    <div className="navbar">
      <h1 style={{textAlign:"center"}}>The Ladies</h1>
    </div>
  );
}