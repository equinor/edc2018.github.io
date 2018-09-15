import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Schedule from './Schedule';
import Lecture from './Lecture';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Schedule} />
      <Route path="/lecture/:id/" component={Lecture} />
    </Switch>
  </BrowserRouter>
);

export default App;
