import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import AuthApp from './components/AuthApp';
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';
import React from 'react';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header signedIn={undefined} onSignOut={undefined} />
          <Switch>
            <Route path='/auth' component={AuthApp} />
            <Route path='/' component={MarketingApp} />
            <Route />
          </Switch>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
