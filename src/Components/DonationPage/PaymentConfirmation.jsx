import React from 'react';

import FlatButton from 'material-ui/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import Done from 'material-ui-icons/Done';

export class PaymentConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };  
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  
  render() {
    return (
      <div style={{padding:"10px"}}>
        <FlatButton variant="raised" color="primary" onClick={this.handleClickOpen}>
          Confirm Donation&nbsp;<Done />
        </FlatButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Confirm your donation to " 
            + this.props.orgName + "?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Your donation of {this.props.currencySymbol}{this.props.amount} ({this.props.currency}) cannot be reversed.
            </DialogContentText>
            <div>
              {this.props.message 
                ? <div>
                  <Divider />
                  <DialogContentText>
                    <p>
                      Your message is:<br/>
                      {this.props.message}
                    </p>
                  </DialogContentText> 
                  </div>
                : null
              }
            </div>
          </DialogContent>
          <DialogActions>
            <FlatButton onClick={this.handleClose} color="primary">
              Cancel
            </FlatButton>
            <FlatButton onClick={this.handleClose} color="primary" autoFocus>
              Confirm
            </FlatButton>
          </DialogActions>
        </Dialog>
      </div>
    ) 
  }
}