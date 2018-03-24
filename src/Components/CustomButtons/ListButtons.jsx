import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Menu, { MenuItem } from 'material-ui/Menu';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import AttachMoney from 'material-ui-icons/AttachMoney';
import Share from 'material-ui-icons/Share';
import School from 'material-ui-icons/School';
import { SocialIcon } from 'react-social-icons';
        
const siteStyle = {
  selected: {
    color: '#008080'
  },
};

export class ShareButton extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const menuItemStyle = {
      height: '40px',
    };

    return (
      <div>
        <ListItem
          button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <ListItemIcon style={siteStyle.selected}>
            <Share />
          </ListItemIcon>
          <ListItemText primary="Share" />
        </ListItem>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem style={menuItemStyle} onClick={this.handleClose}>
            <SocialIcon url="https://facebook.com" />
            &nbsp;&nbsp;&nbsp;Facebook
          </MenuItem>
          <MenuItem style={menuItemStyle} onClick={this.handleClose}>
            <SocialIcon url="https://twitter.com" />
            &nbsp;&nbsp;&nbsp;Twitter
          </MenuItem>
          <MenuItem style={menuItemStyle} onClick={this.handleClose}>
            <SocialIcon url="https://instagram.com" />
            &nbsp;&nbsp;&nbsp;Instagram
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

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


