import React from 'react';

import FlatButton from 'material-ui/Button';
import Card from 'material-ui/Card';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Done from 'material-ui-icons/Done';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';

export class PaymentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [
        {
          value: 'USD',
          label: '$',
        },
        {
          value: 'AUD',
          label: '$',
        },
        {
          value: 'EUR',
          label: '€',
        },
        {
          value: 'JPY',
          label: '¥',
        },
      ],
      currency: 'USD',
      error: false,
      errorText: "",
    }

    this.toggleError = this.toggleError.bind(this);
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  onChange = event => {
    const paymentRegex = new RegExp(/^\s*\d*\.?\d*\s*$/);
    console.log(paymentRegex)
    console.log(event.target.value);
    if (paymentRegex.test(event.target.value)) {
      console.log("passed")
      this.state.error = false;
      this.state.errorText = "";
    } else {
      console.log("failed")
      this.state.error = true;
      this.state.errorText = "Please enter a valid value";
    }
  }

  toggleError = () => {
    this.setState(state => ({
      error: state.error,
    }));
  }
  
  render() {
   return (
    <Card style={{width:"80%", align:"center"}}>
      <TextField
      id="select-currency"
      select
      value={this.state.currency}
      onChange={this.handleChange('currency')}
      helperText="Please select your currency"
      margin="normal"
      >
      {this.state.currencies.map(option => (
        <MenuItem style={{width: 200}} key={option.value} value={option.value}>
          {option.value} {option.label}
        </MenuItem>
      ))}
      </TextField>
      <div>
        <TextField
          id="input-amount"
          label="Enter an amount"
          margin="normal"
          onChange={this.onChange.bind(this)}
          />
        {this.state.currency}
      </div>
      <div style={{padding:"10px"}}>
      <Button variant="raised" color="primary">
        Donate&nbsp;<Done />
      </Button>
      </div>
    </Card>
    )
  }
}