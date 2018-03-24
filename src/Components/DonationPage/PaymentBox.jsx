import React from 'react';

import Card from 'material-ui/Card';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';

export class PaymentBox extends React.Component {
  state = {
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
      label="Select"
      value={this.state.currency}
      onChange={this.handleChange('currency')}
      helperText="Please select your currency"
      margin="normal"
      >
      {this.state.currencies.map(option => (
        <MenuItem style={{width: 200}} key={option.value} value={option.value}>
          {option.value}
        </MenuItem>
      ))}
      </TextField>
    </Card>
    )
  }
}