import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import MainPage from '../main-page';
import News from '../news';
import PageNotFound from '../page-not-found';

const App = () => {
  return (
    <Switch>
      <Route
       path="/"
       component={MainPage}
       exact
      />

      <Route
       path="/news/"
       component={News}
       exact
      />

      <Route
       path="/news/:id"
       component={News}
      />

      <Route
       component={PageNotFound}
      />
    </Switch>
  );
}

export default App;
