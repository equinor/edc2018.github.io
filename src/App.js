import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Schedule from './Schedule';
import Event from './Event';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Schedule} />
      <Route path="/event/:id/" component={Event} />
    </Switch>
  </BrowserRouter>
);

export default App;
