import React from 'react';
import 'stylesheets/App.css';
import {Switch, Route} from 'react-router-dom'

import Welcome from 'pages/Welcome'
import P404 from 'pages/P404'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Welcome />} />
        <Route exact path="*" render={() => <P404 />} />
      </Switch>
    </div>
  );
}

export default App;
