import './App.scss';
import React from 'react';
import {Switch, Route} from 'react-router';
import MapIterator from './Components/MapIterator';

function App() {
  return (
    <div>
      <Switch>
        <Route path = '/' component = {MapIterator} />
      </Switch>
    </div>
  );
}

export default App;
