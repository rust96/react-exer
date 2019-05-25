import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../main-page';
import BoardPage from '../board-page';
import PageNotFound from '../page-not-found';

import './app.scss';

const App = () => {
  return (
    <Switch>
      <Route
       path="/"
       component={MainPage}
       exact
      />

      <Route
       path="/boards/"
       component={BoardPage}
       exact
      />

      <Route
       path="/boards/:id"
       component={BoardPage}
      />

      <Route
       component={PageNotFound}
      />
    </Switch>
  );
}

export default App;
