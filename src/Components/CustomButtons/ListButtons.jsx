import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import AttachMoney from 'material-ui-icons/AttachMoney';
import Share from 'material-ui-icons/Share';
import School from 'material-ui-icons/School';
import { withStyles } from 'material-ui/styles';

const siteStyle = {
  selected: {
    color: '#008080'
  },
};


export const ShareButton = props => {
  const {classes} = props;
  return (
    <ListItem button>
      <ListItemIcon style = {siteStyle.selected}>
        <Share style />
      </ListItemIcon>
    <ListItemText primary= "Share" />
    </ListItem>
  );
};


export const DonateButton = props => {
  return (
    <ListItem button component={Link} to={"/donations/" + props.orgName}>
      <ListItemIcon style = {siteStyle.selected}>
        <AttachMoney />
      </ListItemIcon>
    <ListItemText primary="Donate" />
    </ListItem>
  );
};

export const CharityButton = props => {
  return (
    <ListItem button component={Link} to={"/charity/" + props.orgName}>
      <ListItemIcon style = {siteStyle.selected}>
        <School />
      </ListItemIcon>
    <ListItemText primary="Learn More" />
    </ListItem>
  );
};


