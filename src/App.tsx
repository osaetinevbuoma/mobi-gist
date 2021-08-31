import React from 'react';
import Home from './components/Home';
import { BadgeProvider } from './context/BadgeContext';

const App = (): JSX.Element => {
  return (
    <BadgeProvider>
      <Home />
    </BadgeProvider>
  );
}

export default App;
