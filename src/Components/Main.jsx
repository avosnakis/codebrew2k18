import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage.jsx';
import DonationPage from './DonationPage/DonationPage.jsx';

export const Main = () => {
  return (<main>
    <HashRouter>
      <div>
        <Route exact path='/' component={HomePage}/>
        <Route path='/donations/:orgName' component={DonationPage}/>
      </div>
    </HashRouter>
  </main>)
}