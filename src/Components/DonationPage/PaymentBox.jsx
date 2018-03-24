import React from 'react';

import FlatButton from 'material-ui/Button';
import Card from 'material-ui/Card';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Done from 'material-ui-icons/Done';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';

import { PaymentConfirmation } from './PaymentConfirmation.jsx';

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
      message: "",
      amount: ""
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

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
          label="Required"
          margin="normal"
          placeholder="Amount"
          onChange={this.handleChange('amount')}
          />
        {this.state.currency}
      </div>
      <div>
        <TextField
          id="input-card"
          label="Required"
          margin="normal"
          placeholder="Card Number"
          />
        &nbsp;-&nbsp;
        <TextField
          id="input-ccv"
          label="Required"
          margin="normal"
          placeholder="CCV"
          />
      </div>
      <div>
        <TextField
          id="multiline-static"
          label="Leave a message?"
          multiline
          rows="4"
          margin="normal"
          onChange={this.handleChange('message')}
        />
      </div>
      <PaymentConfirmation message={this.state.message} 
        currency={this.state.currency} 
        currencySymbol={this.state.currencies.filter(currency => {
          return currency.value === this.state.currency;
        })[0].label}
        amount={this.state.amount}
        orgName={this.props.orgName}
        /> 
    </Card>
    )
  }
}