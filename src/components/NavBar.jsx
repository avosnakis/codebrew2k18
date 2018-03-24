import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import ToolBar from 'material-ui/Toolbar';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function NavBar(props) {
  const {classes} = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <ToolBar>
          The Ladies
        </ToolBar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);