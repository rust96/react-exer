import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../main-page';
import News from '../news';

const App = () => {
  return (
    <Switch>
      <Route
       path="/"
       component={MainPage}
       exact
      />

      <Route
       path="/news"
       component={News}
       exact
      />
    </Switch>
  );
}

export default App;
