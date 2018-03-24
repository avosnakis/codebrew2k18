import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage.jsx';
import DonationPage from './DonationPage/DonationPage.jsx';

export const Main = () => {
  return (<main>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/donations/:orgName' component={DonationPage}/>
    </Switch>
  </main>)
}