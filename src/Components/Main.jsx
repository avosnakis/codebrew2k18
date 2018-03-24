import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import CharityPage from './CharityPage/CharityPage';

export const Main = () => {
  return (<main>
    <Switch>
      <Route exact path='/' component={CharityPage}/>
    </Switch>
  </main>)
}
