import React from 'react';

import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import Share from 'material-ui-icons/Share';
import { SocialIcon } from 'react-social-icons';

class ShareButton extends React.Component {
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
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <Share />&nbsp;&nbsp;&nbsp;Share
        </Button>
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

export default ShareButton;
