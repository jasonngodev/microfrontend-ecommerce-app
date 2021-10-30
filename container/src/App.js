import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';
import React from 'react';

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header signedIn={undefined} onSignOut={undefined} />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
};
