import React from 'react';
import { Link } from 'react-router-dom';

import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import AttachMoney from 'material-ui-icons/AttachMoney';
import Share from 'material-ui-icons/Share';
import School from 'material-ui-icons/School';

const shareStyle = {
  textColor: 'red'
}

const donateStyle = {
  backgroundColor: 'DeepSkyBlue'
}

const charityStyle = {
  backgroundColor: 'OrangeRed'
}

export const ShareButton = props => {
  return (
    <ListItem button>
      <ListItemIcon>
        <Share />
      </ListItemIcon>
    <ListItemText primary="Share" />
    </ListItem>
  );
};

export const DonateButton = props => {
  return (
    <ListItem button component={Link} to={"/donations/" + props.orgName}>
      <ListItemIcon>
        <AttachMoney />
      </ListItemIcon>
    <ListItemText primary="Donate" />
    </ListItem>
  );
};

export const CharityButton = props => {
  return (
    <ListItem button component={Link} to={"/charity/" + props.orgName}>
      <ListItemIcon>
        <School />
      </ListItemIcon>
    <ListItemText primary="Learn More" />
    </ListItem>
  );
};