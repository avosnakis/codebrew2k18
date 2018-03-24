import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage.jsx';
import DonationPage from './DonationPage/DonationPage.jsx';
import CharityPage from './CharityPage/CharityPage.jsx';

export const Main = () => {
  return (<main>
    <HashRouter>
      <div>
        <Route exact path='/' component={HomePage}/>
        <Route path='/donations/:orgName' component={DonationPage}/>
        <Route path='/charity/:orgName' component={CharityPage}/>
      </div>
    </HashRouter>
  </main>)
}