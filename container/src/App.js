import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import { BrowserRouter } from 'react-router-dom';
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
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
