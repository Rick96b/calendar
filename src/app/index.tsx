import React from 'react';
import { Routing } from 'pages';
import { withProviders } from './providers';

import './styles/index.scss'
import { BottomNav } from 'widgets/bottom-nav';

function App() {
  return (
    <div className="App">
      <div className='content'>
        <Routing /> 
      </div>
      <BottomNav />
    </div>
  );
}

export default withProviders(App);
